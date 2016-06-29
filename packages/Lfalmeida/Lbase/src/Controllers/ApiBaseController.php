<?php
namespace Lfalmeida\Lbase\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;
use Lfalmeida\Lbase\Contracts\RepositoryInterface as Repository;

/**
 * Class ApiBaseController
 * @package Lfalmeida\Lbase\Controllers
 */
abstract class ApiBaseController extends Controller
{
    /**
     * @var Repository
     */
    protected $repository;

    /**
     * ApiBaseController constructor.
     * @param Repository $repository
     */
    public function __construct(Repository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->input('disablePagination')) {
            if ($request->input('search')) {
                return $this->search($request);
            }
            return $this->listAll($request);
        }

        if ($request->input('search')) {
            return $this->search($request);
        }

        if ($request->input('count')) {
            return $this->countAll();
        }

        return $this->paginate($request);
    }

    /**
     * Display paginated api resources
     *
     * @param Request $request
     */
    protected function paginate(Request $request)
    {
        $fields = $request->input('fields') ? explode(',', $request->input('fields')) : ['*'];
        $pageSize = $request->input('pageSize') ? (int)$request->input('pageSize') : null;

        $pagination = $this->repository->paginate($pageSize, $fields);

        $pagination->appends($request->except(['page']));

        return Response::apiResponse($pagination);
    }

    /**
     * Display all resources without pagination
     *
     * @param Request $request
     * @return mixed
     */
    protected function listAll(Request $request)
    {
        $fields = $request->input('fields') ? explode(',', $request->input('fields')) : ['*'];

        $allResults = $this->repository->all($fields);

        return Response::apiResponse($allResults);
    }

    /**
     * Returns the total of items
     *
     * @return mixed
     */
    protected function countAll()
    {
        $allResults = $this->repository->countAll();
        return Response::apiResponse($allResults);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    protected function search(Request $request)
    {
        $allResults = $this->repository->search($request->all());
        return Response::apiResponse($allResults);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $response = $this->repository->create($request->all());
        return Response::apiResponse($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        $fields = $request->input('fields') ? explode(',', $request->input('fields')) : ['*'];

        $resource = $this->repository->find($id, $fields);

        if (empty($resource)) {
            return Response::apiResponse(null, 'error', trans('api.resourceNotFound'));
        }

        return Response::apiResponse($resource);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $response = $this->repository->update($id, $request->all());
        return Response::apiResponse($response);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            return Response::apiResponse($this->repository->delete($id));
        } catch (\Illuminate\Database\QueryException $e) {
            return Response::apiResponse(null, 'success', 'Este item não pode ser excluído. ', 400);
        } catch (\Exception $e) {
            return Response::apiResponse(null, 'success', 'Não foi possível excluir o registro', 400);
        }
    }

}