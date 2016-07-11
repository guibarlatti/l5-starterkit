<?php
namespace App\Http\Controllers\Api\V1;

use App\Repositories\UsersRepository as Repository;
use Illuminate\Http\Request;
use Lfalmeida\Lbase\Controllers\ApiBaseController;
use Lfalmeida\Lbase\Utils\Uploader;
use Response;

class UsersController extends ApiBaseController
{
    /**
     * UsersController constructor.
     *
     * @param Repository $repository
     */
    public function __construct(Repository $repository)
    {
        parent::__construct($repository);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function store(Request $request)
    {
        $data = $request->except(['profilePicture']);
        $uploader = new Uploader($subfolder = 'users/profile/');
        $inputFiles = $request->file('profilePicture');
        $uploadedFiles = [];

        try {

            if ($inputFiles) {
                $uploader->handle($inputFiles);
                $uploadedFiles = $uploader->getFileList();
                $data['profilePicture'] = isset($uploadedFiles[0]->url) ? $uploadedFiles[0]->url : null;
            }

            $response = $this->repository->create($data);

        } catch (\Exception $e) {
            if (isset($uploadedFiles[0]->filePath)) {
                $uploader->removeFile($uploadedFiles[0]->filePath);
            }
            throw $e;
        }

        return Response::apiResponse([
            'data' => $response
        ]);
    }

    /**
     * @apiDefine HeaderToken
     * @apiHeader {String} Authorization Bearer Token. Ex.: "Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
     */

    /**
     * @apiDefine PaginationParams
     * @apiParam {Number} perPage Total de registros por página (opcional)
     * @apiParam {Number} page    Página desejada (opcional)
     */

    /**
     * @apiDefine CreateUpdateSuccess
     * @apiSuccess {String} status    Status retornado.
     * @apiSuccess {Object} data      Objeto contendo a entidade criada ou atualizada.
     * @apiSuccess {String} message   Mensagem.
     */

    /**
     * @apiDefine BooleanSuccess
     * @apiSuccess {String} status    Status retornado.
     * @apiSuccess {Boolean} data     Boolean indicando o sucesso ou falha da operação
     * @apiSuccess {String} message   Mensagem.
     */

    /**
     * @apiDefine         PaginationSuccess
     * @apiSuccessExample Success-Response:
     * HTTP/1.1 200 OK
     * {
     *     "status": "success",
     *         "data": [{
     *             "property": "Value",
     *         }, {
     *             "property": "Value",
     *         }],
     *         "paging": {
     *             "total": 3,
     *             "perPage": 15,
     *             "currentPage": 1,
     *             "lastPage": 1,
     *             "from": 1,
     *             "to": 3,
     *             "previous": null,
     *             "next": null
     *         },
     *         "message": "OK."
     * }
     *
     * @apiSuccess {String}   status    Status da api.
     * @apiSuccess {Object[]} data      Array contendo os objetos retornados.
     * @apiSuccess {Object}   paging    Metadados sobre o estado da paginação
     * @apiSuccess {String}   message   Mensagem.
     *
     */


    /**
     * Método List
     *
     * @apiDescription    Lista os usuários com paginação de resultados.
     *
     *
     * @apiUse            HeaderToken
     * @api               {get} /api/v1/users List
     * @apiVersion        1.0.0
     * @apiName           List Users
     * @apiGroup          Users
     * @apiSampleRequest  /api/v1/users
     *
     *
     * @apiUse            PaginationParams
     * @apiUse            PaginationSuccess
     *
     */


    /**
     * Método Get
     *
     * @apiDescription    Obtem um usuário específico. O identificador do usuário deve ser passado na url no local
     *                    indicado <strong>:id</strong>
     *
     * @apiUse            HeaderToken
     * @api               {get} /api/v1/users/:id Get
     * @apiVersion        1.0.0
     * @apiName           Get User
     * @apiGroup          Users
     * @apiSampleRequest  /api/v1/users/:id
     *
     *
     * @apiUse            BooleanSuccess
     *
     */


    /**
     * Método Create
     *
     * @apiDescription    Cria um usuário.
     * @apiUse            HeaderToken
     * @api               {post} /api/v1/users Create
     * @apiVersion        1.0.0
     * @apiName           Create User
     * @apiGroup          Users
     * @apiSampleRequest  /api/v1/users
     *
     * @apiParam {String} name  Nome do Usuário
     * @apiParam {String} email Email do usuário
     * @apiParam {String} password Senha em texto pleno
     *
     * @apiUse            CreateUpdateSuccess
     *
     */


    /**
     * Método Update
     *
     * @apiDescription    Atualiza os dados de um usuário. O identificador do usuário deve ser passado na url no local
     *                    indicado <strong>:id</strong>
     * @apiUse            HeaderToken
     * @api               {put} /api/v1/users/:id Update
     * @apiVersion        1.0.0
     * @apiName           Update User
     * @apiGroup          Users
     * @apiSampleRequest  /api/v1/users/:id
     *
     * @apiParam {String} name  Nome do Usuário
     * @apiParam {String} email Email do usuário
     * @apiParam {String} password Senha em texto pleno
     *
     * @apiUse            CreateUpdateSuccess
     *
     */


    /**
     * Método Delete
     *
     * @apiDescription    Deleta um usuário. O identificador do usuário deve ser passado na url no local
     *                    indicado <strong>:id</strong>
     *
     * @apiUse            HeaderToken
     * @api               {delete} /api/v1/users/:id Delete
     * @apiVersion        1.0.0
     * @apiName           Delete User
     * @apiGroup          Users
     * @apiSampleRequest  /api/v1/users/:id
     *
     *
     * @apiUse            BooleanSuccess
     *
     */


}
