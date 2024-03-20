
function errorHandle(res) {
    const headers = {
        "Content-Type": "text/json"
    }

    res.writeHead(400, headers)
    res.write(JSON.stringify({
        "status": "false",
        "message": "欄位未填寫正確或無此 todo id"
    }))
    res.end()
}

module.exports = errorHandle
