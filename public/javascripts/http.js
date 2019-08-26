/**
* Http Class
*
* @description This class' purpose is to handle https requets.
* @author Vinas de Andrade <vinas.andrade@gmail.com>
* @since 2017/08/31
* @version 1.19.0826
* @license license.txt
*/

function Http() {

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
        let xhttp = new XMLHttpRequest();
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

}
