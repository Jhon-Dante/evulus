import Api from "../../utils/Api";

class Transfers {
    static getTransfers = (page,form) => { return Api.createResponse(`/transactions/get?page=${page}`, form)};

    static processTransaction = (address) => { return Api.createResponse(`https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=${address}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=B2Y6A4DDFMK3FQEW6N61KKJUPSHRZEH198`)}
}

export default Transfers