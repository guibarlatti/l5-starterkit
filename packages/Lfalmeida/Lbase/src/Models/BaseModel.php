<?php
namespace Lfalmeida\Lbase\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Sofa\Eloquence\Contracts\CleansAttributes;
use Sofa\Eloquence\Contracts\Validable as ValidableContract;
use Sofa\Eloquence\Eloquence;
use Sofa\Eloquence\Validable;

/**
 * Class BaseModel
 *
 * Base para todos os models da aplicação, mantendo a consistência e convenção de nomes de propriedades
 * e colunas do banco de dados
 *
 * @package App\Models
 *
 */
class BaseModel extends Authenticatable implements ValidableContract, CleansAttributes
{
    /**
     * Torna este model pesquisável e "validável"
     */
    use Eloquence, Validable;

    /**
     * Columas pesquisáveis via Eloquence trait
     *
     * @var array
     */
    protected $searchableColumns = ['name'];

    /**
     * Converte a saída de snake_case para loweCamelCase
     *
     * @return array
     */
    public function toArray()
    {
        $array = parent::toArray();
        $renamed = [];
        foreach ($array as $key => $value) {
            $renamed[camel_case($key)] = $value;
        }
        return $renamed;
    }

    /**
     * Mantém a compatibilidade com snake_case ao acessar atributos
     *
     * @param string $key
     *
     * @return mixed
     */
    public function getAttribute($key)
    {
        $key = snake_case($key);
        return parent::getAttribute($key);
    }

    /**
     * Mantém a compatibilidade com snake_case ao definir atributos
     *
     * @param string $key
     * @param mixed  $value
     *
     * @return $this|void
     */
    public function setAttribute($key, $value)
    {
        $key = snake_case($key);
        return parent::setAttribute($key, $value);
    }

}
