/**
* Ajax Class
*
* @description This class' purpose is to handle ajax requets.
* @author Vinas de Andrade <vinas.andrade@gmail.com>
* @since 2017/08/31
* @version 1.19.0817
* @license SaSeed\license.txt
*/

function Ajax() {

    var xhttp = new XMLHttpRequest();

    this.get = get;
    this.post = post;
    this.put = put;
    this.delete = del;

    return this;

    function get(uri, success, error) {
        handleRequest('GET', uri, null, success, error);
    }

    function post(uri, params, success, error) {
        handleRequest('POST', uri, params, success, error);
    }

    function put(uri, params, success, error) {
        handleRequest('PUT', uri, params, success, error);
    }

    function del(uri, success, error) {
        handleRequest('DELETE', uri, null, success, error);
    }

    function handleRequest(type, uri, params, success, error) {
        xhttp.onreadystatechange = function() {
            handleResponse(this, success, error);
        }
        xhttp.open(type, uri, true);
        xhttp.setRequestHeader("Content-type", "appplication/json;charset=UTF-8");
        xhttp.send(params);
    }

    function handleResponse(res, success, error) {
        if (res.readyState == 4) {
            if (res.status == 200) {
                if (success) {
                    success(JSON.parse(res.responseText));
                    return;
                }
                if (error) error(JSON.parse(res.responseText));
            }
        }
    }

    function populateFormData(params) {
        var data = new FormData();
        if (params) {
            for (var key in params) {
                data.append(key, params[key]);
            }
        }
        return data;
    }

}
