<?php
/**
 * Short description
 *
 * Long description
 *
 * @author Fernando
 *
 */

namespace App\Exceptions;


class ValidationException extends \Exception
{
    protected $messages = [];

    /**
     * @return array
     */
    public function getMessages()
    {
        return $this->messages;
    }

    /**
     * @param array $messages
     *
     * @return ApiException
     */
    public function setMessages($messages)
    {
        $this->messages = $messages;
        return $this;
    }
}