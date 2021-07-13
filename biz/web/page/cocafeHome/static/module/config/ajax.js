//ajax配置
var host = "/";
// try {
//     if (document.location.port == "443") {
//         host = "http://18.166.99.100:8887";
//     } else {
//         host = "http://18.166.99.100:8886";
//     }
// } catch (e) {
//     host = "/"
// }

module.exports = {
    ajax: {
        host,
        apiList: {
            "customerInfo": {
                "getList": "POST /trisa1/query_kyc_list",
                "create": "POST /trisa1/create_kyc",
                "detail": 'POST /trisa1/query_kyc_detail'
            },
            "verify": {
                "list":{
                    "getList": "POST /trisa1/query_txn_list",
                    "detail": "POST /trisa1/query_txn_detail",
                    "submit": "POST /trisa1/action",
                    "create": "POST /trisa1/create_txn"
                },
                "record":{
                    "getList": "POST /query_txn_list",
                }
            }
        }
    }
}