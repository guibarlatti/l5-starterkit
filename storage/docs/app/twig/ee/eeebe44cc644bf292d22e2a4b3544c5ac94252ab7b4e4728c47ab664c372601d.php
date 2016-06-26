<?php

/* macros.twig */
class __TwigTemplate_dd3ef15ec7389b2b6f03a6205cc52b8743908b22525f289c1563c3bb0a675aee extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 4
        echo "
";
        // line 14
        echo "
";
        // line 20
        echo "
";
        // line 26
        echo "
";
        // line 42
        echo "
";
        // line 48
        echo "
";
        // line 56
        echo "
";
        // line 60
        echo "
";
        // line 72
        echo "
";
        // line 93
        echo "
";
    }

    // line 1
    public function getnamespace_link($__namespace__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "namespace" => $__namespace__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 2
            echo "<a href=\"";
            echo $this->env->getExtension('sami')->pathForNamespace($context, (isset($context["namespace"]) ? $context["namespace"] : $this->getContext($context, "namespace")));
            echo "\">";
            echo (isset($context["namespace"]) ? $context["namespace"] : $this->getContext($context, "namespace"));
            echo "</a>";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 5
    public function getclass_link($__class__ = null, $__absolute__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "class" => $__class__,
            "absolute" => $__absolute__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 6
            if ($this->getAttribute((isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), "projectclass", array())) {
                // line 7
                echo "<a href=\"";
                echo $this->env->getExtension('sami')->pathForClass($context, (isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")));
                echo "\">";
            } elseif ($this->getAttribute(            // line 8
(isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), "phpclass", array())) {
                // line 9
                echo "<a target=\"_blank\" href=\"http://php.net/";
                echo (isset($context["class"]) ? $context["class"] : $this->getContext($context, "class"));
                echo "\">";
            }
            // line 11
            echo $this->env->getExtension('sami')->abbrClass((isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), ((array_key_exists("absolute", $context)) ? (_twig_default_filter((isset($context["absolute"]) ? $context["absolute"] : $this->getContext($context, "absolute")), false)) : (false)));
            // line 12
            if (($this->getAttribute((isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), "projectclass", array()) || $this->getAttribute((isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), "phpclass", array()))) {
                echo "</a>";
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 15
    public function getmethod_link($__method__ = null, $__absolute__ = null, $__classonly__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "method" => $__method__,
            "absolute" => $__absolute__,
            "classonly" => $__classonly__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 16
            echo "<a href=\"";
            echo $this->env->getExtension('sami')->pathForMethod($context, (isset($context["method"]) ? $context["method"] : $this->getContext($context, "method")));
            echo "\">";
            // line 17
            echo $this->env->getExtension('sami')->abbrClass($this->getAttribute((isset($context["method"]) ? $context["method"] : $this->getContext($context, "method")), "class", array()));
            if ( !((array_key_exists("classonly", $context)) ? (_twig_default_filter((isset($context["classonly"]) ? $context["classonly"] : $this->getContext($context, "classonly")), false)) : (false))) {
                echo "::";
                echo $this->getAttribute((isset($context["method"]) ? $context["method"] : $this->getContext($context, "method")), "name", array());
            }
            // line 18
            echo "</a>";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 21
    public function getproperty_link($__property__ = null, $__absolute__ = null, $__classonly__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "property" => $__property__,
            "absolute" => $__absolute__,
            "classonly" => $__classonly__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 22
            echo "<a href=\"";
            echo $this->env->getExtension('sami')->pathForProperty($context, (isset($context["property"]) ? $context["property"] : $this->getContext($context, "property")));
            echo "\">";
            // line 23
            echo $this->env->getExtension('sami')->abbrClass($this->getAttribute((isset($context["property"]) ? $context["property"] : $this->getContext($context, "property")), "class", array()));
            if ( !((array_key_exists("classonly", $context)) ? (_twig_default_filter((isset($context["classonly"]) ? $context["classonly"] : $this->getContext($context, "classonly")), true)) : (true))) {
                echo "#";
                echo $this->getAttribute((isset($context["property"]) ? $context["property"] : $this->getContext($context, "property")), "name", array());
            }
            // line 24
            echo "</a>";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 27
    public function gethint_link($__hints__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "hints" => $__hints__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 28
            $context["__internal_4d51b0836e4bd18786001162f181c8d44a04ca81abcd5d4e6e129d8638606c18"] = $this;
            // line 29
            echo "
    ";
            // line 30
            if ((isset($context["hints"]) ? $context["hints"] : $this->getContext($context, "hints"))) {
                // line 31
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["hints"]) ? $context["hints"] : $this->getContext($context, "hints")));
                $context['loop'] = array(
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                );
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["hint"]) {
                    // line 32
                    if ($this->getAttribute($context["hint"], "class", array())) {
                        // line 33
                        echo $context["__internal_4d51b0836e4bd18786001162f181c8d44a04ca81abcd5d4e6e129d8638606c18"]->getclass_link($this->getAttribute($context["hint"], "name", array()));
                    } elseif ($this->getAttribute(                    // line 34
$context["hint"], "name", array())) {
                        // line 35
                        echo $this->env->getExtension('sami')->abbrClass($this->getAttribute($context["hint"], "name", array()));
                    }
                    // line 37
                    if ($this->getAttribute($context["hint"], "array", array())) {
                        echo "[]";
                    }
                    // line 38
                    if ( !$this->getAttribute($context["loop"], "last", array())) {
                        echo "|";
                    }
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['hint'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 43
    public function getsource_link($__project__ = null, $__class__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "project" => $__project__,
            "class" => $__class__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 44
            if ($this->getAttribute((isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), "sourcepath", array())) {
                // line 45
                echo "        (<a href=\"";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), "sourcepath", array()), "html", null, true);
                echo "\">View source</a>)";
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 49
    public function getmethod_source_link($__method__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "method" => $__method__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 50
            if ($this->getAttribute((isset($context["method"]) ? $context["method"] : $this->getContext($context, "method")), "sourcepath", array())) {
                // line 51
                echo "        <a href=\"";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["method"]) ? $context["method"] : $this->getContext($context, "method")), "sourcepath", array()), "html", null, true);
                echo "\">line ";
                echo $this->getAttribute((isset($context["method"]) ? $context["method"] : $this->getContext($context, "method")), "line", array());
                echo "</a>";
            } else {
                // line 53
                echo "        line ";
                echo $this->getAttribute((isset($context["method"]) ? $context["method"] : $this->getContext($context, "method")), "line", array());
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 57
    public function getabbr_class($__class__ = null, $__absolute__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "class" => $__class__,
            "absolute" => $__absolute__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 58
            echo "<abbr title=\"";
            echo twig_escape_filter($this->env, (isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, ((((array_key_exists("absolute", $context)) ? (_twig_default_filter((isset($context["absolute"]) ? $context["absolute"] : $this->getContext($context, "absolute")), false)) : (false))) ? ((isset($context["class"]) ? $context["class"] : $this->getContext($context, "class"))) : ($this->getAttribute((isset($context["class"]) ? $context["class"] : $this->getContext($context, "class")), "shortname", array()))), "html", null, true);
            echo "</abbr>";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 61
    public function getmethod_parameters_signature($__method__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "method" => $__method__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 62
            $context["__internal_d01587267a11686be16de76b2570cd707557db8c86fe58266290f7c5ac5c8f52"] = $this->loadTemplate("macros.twig", "macros.twig", 62);
            // line 63
            echo "(";
            // line 64
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["method"]) ? $context["method"] : $this->getContext($context, "method")), "parameters", array()));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["parameter"]) {
                // line 65
                if ($this->getAttribute($context["parameter"], "hashint", array())) {
                    echo $context["__internal_d01587267a11686be16de76b2570cd707557db8c86fe58266290f7c5ac5c8f52"]->gethint_link($this->getAttribute($context["parameter"], "hint", array()));
                    echo " ";
                }
                // line 66
                echo "\$";
                echo $this->getAttribute($context["parameter"], "name", array());
                // line 67
                if ($this->getAttribute($context["parameter"], "default", array())) {
                    echo " = ";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["parameter"], "default", array()), "html", null, true);
                }
                // line 68
                if ( !$this->getAttribute($context["loop"], "last", array())) {
                    echo ", ";
                }
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['parameter'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 70
            echo ")";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 73
    public function getrender_classes($__classes__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "classes" => $__classes__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 74
            $context["__internal_931e16fb7bc1188dd9b82f941bb317fb9188accff90637dd6eab6fe002faac72"] = $this;
            // line 75
            echo "
    <div class=\"container-fluid underlined\">
        ";
            // line 77
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["classes"]) ? $context["classes"] : $this->getContext($context, "classes")));
            foreach ($context['_seq'] as $context["_key"] => $context["class"]) {
                // line 78
                echo "            <div class=\"row\">
                <div class=\"col-md-6\">
                    ";
                // line 80
                if ($this->getAttribute($context["class"], "isInterface", array())) {
                    // line 81
                    echo "                        <em>";
                    echo $context["__internal_931e16fb7bc1188dd9b82f941bb317fb9188accff90637dd6eab6fe002faac72"]->getclass_link($context["class"], true);
                    echo "</em>
                    ";
                } else {
                    // line 83
                    echo "                        ";
                    echo $context["__internal_931e16fb7bc1188dd9b82f941bb317fb9188accff90637dd6eab6fe002faac72"]->getclass_link($context["class"], true);
                    echo "
                    ";
                }
                // line 85
                echo "                </div>
                <div class=\"col-md-6\">
                    ";
                // line 87
                echo $this->env->getExtension('sami')->parseDesc($context, $this->getAttribute($context["class"], "shortdesc", array()), $context["class"]);
                echo "
                </div>
            </div>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['class'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 91
            echo "    </div>";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 94
    public function getbreadcrumbs($__namespace__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "namespace" => $__namespace__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 95
            echo "    ";
            $context["current_ns"] = "";
            // line 96
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_split_filter($this->env, (isset($context["namespace"]) ? $context["namespace"] : $this->getContext($context, "namespace")), "\\"));
            foreach ($context['_seq'] as $context["_key"] => $context["ns"]) {
                // line 97
                echo "        ";
                if ((isset($context["current_ns"]) ? $context["current_ns"] : $this->getContext($context, "current_ns"))) {
                    // line 98
                    echo "            ";
                    $context["current_ns"] = (((isset($context["current_ns"]) ? $context["current_ns"] : $this->getContext($context, "current_ns")) . "\\") . $context["ns"]);
                    // line 99
                    echo "        ";
                } else {
                    // line 100
                    echo "            ";
                    $context["current_ns"] = $context["ns"];
                    // line 101
                    echo "        ";
                }
                // line 102
                echo "        <li><a href=\"";
                echo $this->env->getExtension('sami')->pathForNamespace($context, (isset($context["current_ns"]) ? $context["current_ns"] : $this->getContext($context, "current_ns")));
                echo "\">";
                echo $context["ns"];
                echo "</a></li>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['ns'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "macros.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  568 => 102,  565 => 101,  562 => 100,  559 => 99,  556 => 98,  553 => 97,  548 => 96,  545 => 95,  533 => 94,  518 => 91,  508 => 87,  504 => 85,  498 => 83,  492 => 81,  490 => 80,  486 => 78,  482 => 77,  478 => 75,  476 => 74,  464 => 73,  449 => 70,  433 => 68,  428 => 67,  425 => 66,  420 => 65,  403 => 64,  401 => 63,  399 => 62,  387 => 61,  368 => 58,  355 => 57,  338 => 53,  331 => 51,  329 => 50,  317 => 49,  299 => 45,  297 => 44,  284 => 43,  254 => 38,  250 => 37,  247 => 35,  245 => 34,  243 => 33,  241 => 32,  224 => 31,  222 => 30,  219 => 29,  217 => 28,  205 => 27,  190 => 24,  184 => 23,  180 => 22,  166 => 21,  151 => 18,  145 => 17,  141 => 16,  127 => 15,  110 => 12,  108 => 11,  103 => 9,  101 => 8,  97 => 7,  95 => 6,  82 => 5,  63 => 2,  51 => 1,  46 => 93,  43 => 72,  40 => 60,  37 => 56,  34 => 48,  31 => 42,  28 => 26,  25 => 20,  22 => 14,  19 => 4,);
    }
}
/* {% macro namespace_link(namespace) -%}*/
/*     <a href="{{ namespace_path(namespace) }}">{{ namespace|raw }}</a>*/
/* {%- endmacro %}*/
/* */
/* {% macro class_link(class, absolute) -%}*/
/*     {%- if class.projectclass -%}*/
/*         <a href="{{ class_path(class) }}">*/
/*     {%- elseif class.phpclass -%}*/
/*         <a target="_blank" href="http://php.net/{{ class|raw }}">*/
/*     {%- endif %}*/
/*     {{- abbr_class(class, absolute|default(false)) }}*/
/*     {%- if class.projectclass or class.phpclass %}</a>{% endif %}*/
/* {%- endmacro %}*/
/* */
/* {% macro method_link(method, absolute, classonly) -%}*/
/*     <a href="{{ method_path(method) }}">*/
/*         {{- abbr_class(method.class) }}{% if not classonly|default(false) %}::{{ method.name|raw }}{% endif -%}*/
/*     </a>*/
/* {%- endmacro %}*/
/* */
/* {% macro property_link(property, absolute, classonly) -%}*/
/*     <a href="{{ property_path(property) }}">*/
/*         {{- abbr_class(property.class) }}{% if not classonly|default(true) %}#{{ property.name|raw }}{% endif -%}*/
/*     </a>*/
/* {%- endmacro %}*/
/* */
/* {% macro hint_link(hints) -%}*/
/*     {% from _self import class_link %}*/
/* */
/*     {% if hints %}*/
/*         {%- for hint in hints %}*/
/*             {%- if hint.class %}*/
/*                 {{- class_link(hint.name) }}*/
/*             {%- elseif hint.name %}*/
/*                 {{- abbr_class(hint.name) }}*/
/*             {%- endif %}*/
/*             {%- if hint.array %}[]{% endif %}*/
/*             {%- if not loop.last %}|{% endif %}*/
/*         {%- endfor %}*/
/*     {%- endif %}*/
/* {%- endmacro %}*/
/* */
/* {% macro source_link(project, class) -%}*/
/*     {% if class.sourcepath %}*/
/*         (<a href="{{ class.sourcepath }}">View source</a>)*/
/*     {%- endif %}*/
/* {%- endmacro %}*/
/* */
/* {% macro method_source_link(method) -%}*/
/*     {% if method.sourcepath %}*/
/*         <a href="{{ method.sourcepath }}">line {{ method.line|raw }}</a>*/
/*     {%- else %}*/
/*         line {{ method.line|raw }}*/
/*     {%- endif %}*/
/* {%- endmacro %}*/
/* */
/* {% macro abbr_class(class, absolute) -%}*/
/*     <abbr title="{{ class }}">{{ absolute|default(false) ? class : class.shortname }}</abbr>*/
/* {%- endmacro %}*/
/* */
/* {% macro method_parameters_signature(method) -%}*/
/*     {%- from "macros.twig" import hint_link -%}*/
/*     (*/
/*         {%- for parameter in method.parameters %}*/
/*             {%- if parameter.hashint %}{{ hint_link(parameter.hint) }} {% endif -%}*/
/*             ${{ parameter.name|raw }}*/
/*             {%- if parameter.default %} = {{ parameter.default }}{% endif %}*/
/*             {%- if not loop.last %}, {% endif %}*/
/*         {%- endfor -%}*/
/*     )*/
/* {%- endmacro %}*/
/* */
/* {% macro render_classes(classes) -%}*/
/*     {% from _self import class_link %}*/
/* */
/*     <div class="container-fluid underlined">*/
/*         {% for class in classes %}*/
/*             <div class="row">*/
/*                 <div class="col-md-6">*/
/*                     {% if class.isInterface %}*/
/*                         <em>{{ class_link(class, true) }}</em>*/
/*                     {% else %}*/
/*                         {{ class_link(class, true) }}*/
/*                     {% endif %}*/
/*                 </div>*/
/*                 <div class="col-md-6">*/
/*                     {{ class.shortdesc|desc(class) }}*/
/*                 </div>*/
/*             </div>*/
/*         {% endfor %}*/
/*     </div>*/
/* {%- endmacro %}*/
/* */
/* {% macro breadcrumbs(namespace) %}*/
/*     {% set current_ns = '' %}*/
/*     {% for ns in namespace|split('\\') %}*/
/*         {% if current_ns %}*/
/*             {% set current_ns = current_ns ~ '\\' ~ ns %}*/
/*         {% else %}*/
/*             {% set current_ns = ns %}*/
/*         {% endif %}*/
/*         <li><a href="{{ namespace_path(current_ns) }}">{{ ns|raw }}</a></li>*/
/*     {% endfor %}*/
/* {% endmacro %}*/
/* */
