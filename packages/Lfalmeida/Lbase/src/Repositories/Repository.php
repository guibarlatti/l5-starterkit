<?php

namespace Lfalmeida\Lbase\Repositories;

use App\Exceptions\ApiException;
use Illuminate\Database\QueryException;
use Mockery\CountValidator\Exception;
use Lfalmeida\Lbase\Contracts\RepositoryInterface;
use Lfalmeida\Lbase\Exceptions\RepositoryException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Container\Container as App;

/**
 * Class Repository
 * @package Lfalmeida\Lbase\Repositories
 */
abstract class Repository implements RepositoryInterface
{

    /**
     * @var App
     */
    private $app;

    /**
     *
     * @var Model $model
     */
    protected $model;

    /**
     * @var
     */
    protected $relationships;

    /**
     * @var string
     */
    protected $defaultOrderColumn = '';

    /**
     * @var string
     */
    protected $defaultOrderDirection = 'asc';

    /**
     * Repository constructor.
     * @param App $app
     */
    public function __construct(App $app)
    {
        $this->app = $app;
        $this->makeModel();
    }

    /**
     * @param mixed $relationships
     * @return Repository
     */
    public function setRelationships(array $relationships = [])
    {
        $this->relationships = $relationships;
        return $this;
    }

    /**
     * Specify Model class name
     *
     * @return mixed
     */
    abstract public function model();

    /**
     * Método de acesso utilizado para obter a lista de relações
     * que deve ser construida ao instanciar um model
     * @return mixed
     */
    protected function withRelationShips()
    {
        return $this->relationships;
    }

    /**
     * @param array $columns
     * @return mixed
     */
    public function all($columns = array('*'))
    {
        if (!empty($this->defaultOrderColumn)) {
            return $this->model->orderBy($this->defaultOrderColumn, $this->defaultOrderDirection)->get($columns);
        }
        return $this->model->get($columns);
    }


    /**
     * @return mixed
     */
    public function countAll()
    {
        return $this->model->count();
    }

    /**
     * @param int $perPage
     * @param array $columns
     * @return mixed
     */
    public function paginate($perPage = 15, $columns = array('*'))
    {
        if (!empty($this->defaultOrderColumn)) {
            return $this->model
                ->orderBy($this->defaultOrderColumn, $this->defaultOrderDirection)
                ->paginate($perPage, $columns);
        }
        return $this->model->paginate($perPage, $columns);
    }

    /**
     * @param array $data
     * @return mixed
     * @throws ApiException
     */
    public function create(array $data)
    {
        $model = $this->app->make($this->model());
        $model->fill($data);

        try {
            if ($model->save()) {
                return $this->find($model->id);
            }
        } catch (QueryException $e) {
            $errorCode = $e->errorInfo[1];
            if ($errorCode == 1062) {
                throw new ApiException("Erro ao cadastrar: Dados duplicados");
            }
        } catch (Exception $e) {

        }

        return false;

    }

    /**
     * @param $id
     * @param array $data
     * @param string $attribute
     * @return mixed
     * @throws RepositoryException
     */
    public function update($id, array $data, $attribute = "id")
    {
        $model = $this->find($id);

        if (!$model) {
            throw new RepositoryException("O item não solicitado não existe.");
        }

        $model->fill($data);
        $model->save();

        return $this->find($id);

    }

    /**
     * @param $id
     * @return mixed
     * @throws RepositoryException
     */
    public function delete($id)
    {
        $model = $this->find($id);

        if (!$model) {
            throw new RepositoryException("O item não solicitado não existe.");
        }

        return $model->delete();
    }

    /**
     * @param $id
     * @param array $columns
     * @return mixed
     */
    public function find($id, $columns = array('*'))
    {
        return $this->model->find($id, $columns);
    }

    /**
     * @param $attribute
     * @param $value
     * @param array $columns
     * @return mixed
     */
    public function findBy($attribute, $value, $columns = array('*'))
    {
        return $this->model->where($attribute, '=', $value)->get($columns);
    }

    /**
     * @param array $params
     * @return mixed
     * @internal param int $perPage
     */
    public function search(array $params)
    {
        $perPage = isset($params['pageSize']) ? $params['pageSize'] : 15;
        return $this->model->search($params['search'])->paginate($perPage);
    }

    /**
     * @return Model
     * @throws RepositoryException
     */
    public function makeModel()
    {
        $model = $this->app->make($this->model());

        if (!$model instanceof Model)
            throw new RepositoryException("Class {$this->model()} must be an instance of Illuminate\\Database\\Eloquent\\Model");

        $this->model = $model->with($this->withRelationShips());

        return $model;
    }

}