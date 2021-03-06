import { WWW } from './API';
import * as NEL from '../lib/neo-ts/index';
export class UTXO {
    static assets = {}  //{ [id: string]: UTXO[] }
    static history = []
    static balance = {}
    constructor() {
    }
    static async GetAssets(addr) {
        this.history = []
        this.assets = {}
        this.balance = {}
        var utxos = await WWW.api_getUTXO(addr);
        this.assets = {};
        for (var i in utxos) {
            var item = utxos[i];
            var txid = item.txid;
            var n = item.n;
            var asset = item.asset;
            var count = item.value;
            if (this.assets[asset] == undefined) {
                this.assets[asset] = [];
            }
            var utxo = new Utxo();
            utxo.addr = item.addr;
            utxo.asset = asset;
            utxo.n = n;
            utxo.txid = txid;
            utxo.count = NEL.neo.Fixed8.parse(count);
            let type = asset[2] === '6' ? 'GAS' : 'NEO'
            this.history.push({ asset: type, txid: txid, count: count })
            this.assets[asset].push(utxo);
        }
        // console.log(this.assets);
        // console.log(this.history)
    }
}

export class Utxo {
    addr = '';
    txid = '';
    n = -1;
    asset = '';
    count = 0;
}