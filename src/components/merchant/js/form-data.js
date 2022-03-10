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
    max: 100,
    fields: [
      {
        key: '1',
        text: 'Apakah produk dapat digunakan kembali ?',
        score: 10
      },
      {
        key: '2',
        text: 'Apakah produk dapat di daur ulang atau terurai ?',
        score: 20
      },
      {
        key: '3',
        text: 'Apakah produk terbuat dari tumbuhan atau daging unggas ?',
        score: 30
      },
      {
        key: '4',
        text: 'Apakah produk terbuat dari material yang ramah lingkungan ?',
        score: 15
      },
      {
        key: '5',
        text: 'Apakah akan ada polusi ataupun limbah yang ditimbulkan dari penggunaan produk ?',
        score: 15
      },
      {
        key: '6',
        text: 'Apakah packaging produk menggunakan plastik ataupun bahan tidak terurai lain ?',
        score: 10
      }
    ]
  }
]