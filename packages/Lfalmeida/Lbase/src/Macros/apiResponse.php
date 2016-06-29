<?php

use Lfalmeida\Lbase\Macros;

/**
 *
 */
Response::macro('apiResponse', function ($data = [], $httpCode = 200, $overrideMessage = null, $errors = null) {

    $statusMessagesMap = [
        200 => ['status' => 'success', 'message' => 'OK.'],
        201 => ['status' => 'success', 'message' => 'New resource has been created.'],
        204 => ['status' => 'success', 'message' => 'The resource was successfully deleted.'],
        400 => ['status' => 'error', 'message' => 'Bad Request: The request was invalid or cannot be served.'],
        401 => ['status' => 'error', 'message' => 'Unauthorized: The request requires an user authentication.'],
        403 => ['status' => 'error', 'message' => 'Forbidden: access is not allowed.'],
        404 => ['status' => 'error', 'message' => 'Not found: There is no resource behind the URI.'],
        422 => ['status' => 'error', 'message' => 'Unprocessable Entity: Could not process due to validation errors.'],
    ];

    $status = $statusMessagesMap[$httpCode]['status'];
    $message = $overrideMessage ? $overrideMessage : $statusMessagesMap[$httpCode]['message'];
    $response = ['status' => $status, 'data' => $data, 'message' => $message];

    if ($errors) {
        $response['errors'] = $errors;
    }


    /**
     * Retornando objetos customizados para paginação
     */
    if (is_object($data) && is_subclass_of($data, 'Illuminate\Contracts\Pagination\Paginator')) {
        $results = $data->toArray()['data'];
        $response = [
            'status' => $status,
            'data' => $results,
            'paging' => [
                'total' => $data->total(),
                'perPage' => $data->perPage(),
                'currentPage' => $data->currentPage(),
                'lastPage' => $data->lastPage(),
                'from' => $data->firstItem(),
                'to' => $data->lastItem(),
                'previous' => $data->previousPageUrl(),
                'next' => $data->nextPageUrl()
            ],
            'message' => $message
        ];
    }

    return Response::json($response, $httpCode);

});