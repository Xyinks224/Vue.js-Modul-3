Vue.component('showform', {
    template : '#show-form',
    data(){
        return {
            data : { nama_pemilik: '',
                     alamat: '',
                     merek_motor: '',
                     nama_motor: '',
                     warna_motor: '',
                     nomor_plat: '',
                     cc_motor: '',
                     bahan_bakar: ''
                    }
        }
    },
    methods: {
        simpan : function () {
            this.$emit('send-data', this.data);
            this.data.nama_pemilik  = "";
            this.data.alamat        = "";
            this.data.merek_motor   = "";
            this.data.nama_motor    = "";
            this.data.warna_motor   = "";
            this.data.nomor_plat    = "";
            this.data.cc_motor      = "";
            this.data.bahan_bakar   = "";
        }
    }
})

Vue.component('showdata', {
    template : '#show-data',
    props    : ['data']
})

var app = new Vue({
    el      : '#app',
    data    : {
        stnk : {}
    },

    methods : {
        getData : function (value) {
            this.stnk = {
                nama_pemilik : value.nama_pemilik,
                alamat       : value.alamat,
                merek_motor  : value.merek_motor,
                nama_motor   : value.nama_motor,
                warna_motor  : value.warna_motor,
                nomor_plat   : value.nomor_plat,
                cc_motor     : value.cc_motor,
                bahan_bakar  : value.bahan_bakar
            }
        }
    }
})