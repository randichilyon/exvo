export default [
  {
    name: 'Nama produk',
    type: 'text',
    message: '',
    key: 'productName'
  },
  {
    name: 'Deskripsi produk',
    type: 'text',
    message: '',
    key: 'productDescription'
  },
  {
    name: 'Kategori produk',
    type: 'dropdown',
    message: '',
    key: 'category',
    items: [
      {
        label: 'Makanan dan Minuman',
        value: 'f&b'
      },
      {
        label: 'Handphone',
        value: 'handphone'
      },
      {
        label: 'Tiket dan Voucher',
        value: 'tivo'
      }
    ]
  },
  {
    name: 'Eco friendly',
    type: 'switch',
    key: 'isEco',
    scoreKey: 'ecoPoint',
    max: 6,
    fields: [
      {
        key: '1',
        text: 'Apakah produk ini dapat digunakan kembali (tidak sekali pakai)?',
        score: 1
      },
      {
        key: '2',
        text: 'Apakah produk ini dapat di daur ulang?',
        score: 1
      },
      {
        key: '3',
        text: 'Apakah produk ini termasuk dalam kategori energi alternatif?',
        score: 1
      },
      {
        key: '4',
        text: 'Apakah produk ini merupakan produk daur ulang?',
        score: 1
      },
      {
        key: '5',
        text: 'Apakah pemakaian product ini ramah lingkungan dan tidak menimbulkan polusi?',
        score: 1
      },
      {
        key: '6',
        text: 'Apakah anda mengemas produk ini menggunakan product daur ulang atau ramah lingkungan?',
        score: 1
      }
    ]
  }
]