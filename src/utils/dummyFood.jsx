const foods = [
  {
    title: "Өглөөний цай",
    image:
      "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhTTCWCIA1hIygHKbpmD7IxbFBdcQ7Sml-gpRwLv9dGBLZwRtcdFA6NKrdjiLZDqivKsoeAUFAeFvS9lw8oFH7RvvB76sIg8GNL5e1H6KHY4fFhTqMxj-tJeHJQXh8B4mp~5RKrQA6gfeMLk4boyz02ZNKUpX7~v1Z9STBHoV5Rb-vuOeAnijSF1~JNV4uxGz0E2DS9EEpIDeTSEQ2-zVxR3vTWejZlU6QWDESpgUqH3PCV~iZ1OYQ7N2qwZf1JbzRAEx9W-JsTx~lfuLGeVxdjlKsbylfSs4qZOwkbLEGR6~d6MfQcr10rZBmTsZ~6eTtVGb4tOIjfuhLKmyuUUKQ__",
    ingeredient: `Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  `,
    category: "Breakfast",
    price: 12000,
  },
  {
    title: "Food Tart",
    image:
      "https://s3-alpha-sig.figma.com/img/abab/8928/c4c79b15138c71b44dc8c2202844dd61?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CaStqjKFMYH9JQ3JAzQZUvWA1gHbrM6aNLo3Ag-t9zGnBR4d~nEU72TfZXUCQESHCOfA8kyT~n8VUFNocPIGtNYqFlxO2DGs~aiEN43~3V5phowRlxojI-kOVvONVHznpJT4~UwnrB9Wx9YY7Y2Px8tkVdFhyyxwf0Uvz7OcVZ3A-YY3i0iQtWHYfFLc7YBnWm0ZLUms3wkiG0ddUHmF~R6m-~ZsDfaggDXgP~ypbbwpe59Q-~QrAjkV-U2XI1xsvKmVbHrA~cddGbHYRS5OcbsuteBjOMnzLQ2i7fs6qNy3h2EZjaO97KfKtXWz1ifdzclHqFfAHI1AOnpgtr2KDw__",
    ingeredient: `Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  `,

    category: "Dessert",
    price: 2000,
  },
  {
    title: "Main pizza",
    image:
      "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rc6sysrbnJUOK6z60Doex356W7EP8kR5rqL-SXQ7JIOs22L4CgREcPjXvWQfov8a8FrdakfloFQhavDUQkPaFpalh5XbSlzHwJr0ym5EyEOgm2TlIxVkgBmGYNavyubSaB9zrB~Xw1hP06gLAR7gC~80FLEuk2PjwF4ydylyiJUxKh5PdDUCgzAsNr3V5Q1WycDwjm1P0WOKYMvwFsCDBMi7plXgx19vL8IVH7j1E5ikx5pye19nJXLvqb8rv3J2RoDp2wW9xcAxZA5ZH656aZkRhdaTwSWCrFS4rxDIL9en9Ae5ZZ7ohNHFG-vsIpFLYj1b7b4xodupx9baDfKNtQ__",
    ingeredient: `Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  `,
    category: "Food",
    price: 22000,
  },
  {
    title: "Сэндвич",
    image:
      "https://s3-alpha-sig.figma.com/img/fe7d/c5a7/8a8c3a1050476c2fdbcb3f74d438adc2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CuBNkp1nPj3GTqQHTyzGwiM3nusYXCV8nNK9I99Yys8lbVbeLWFyXFsnKauCu7FPVXK~6nXkOKFQvVnhYKka3O7FqRcU45CzCwNfS~lB3XJj0FJVkhAuWsWrWNphEEvvoOuzUtepxfOHWYeQ96BYdqfR44-ciJ9cTgrae2SwiOs8BKMSv75DlppR22Qlmc8qNuD-E3VMHUcslNUpQwX7JUI5XKRsz52CKT4RcqbbqBJ9uwuAAMWRQN1WYKcZbS-S1S8o7Hlk2tL0bALpQ4g0kFIELU1hWK8klWDDcyz6qoq4IN54d0P4SAEZlx4HrA-~hWpMFaFK720TfarKd1NlyQ__",
    ingeredient: `Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  `,
    category: "Salat",
    price: 3000,
  },
  {
    title: "Өглөөний цай1",
    image:
      "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhTTCWCIA1hIygHKbpmD7IxbFBdcQ7Sml-gpRwLv9dGBLZwRtcdFA6NKrdjiLZDqivKsoeAUFAeFvS9lw8oFH7RvvB76sIg8GNL5e1H6KHY4fFhTqMxj-tJeHJQXh8B4mp~5RKrQA6gfeMLk4boyz02ZNKUpX7~v1Z9STBHoV5Rb-vuOeAnijSF1~JNV4uxGz0E2DS9EEpIDeTSEQ2-zVxR3vTWejZlU6QWDESpgUqH3PCV~iZ1OYQ7N2qwZf1JbzRAEx9W-JsTx~lfuLGeVxdjlKsbylfSs4qZOwkbLEGR6~d6MfQcr10rZBmTsZ~6eTtVGb4tOIjfuhLKmyuUUKQ__",
    ingeredient: `Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  `,
    category: "Breakfast",
    price: 12000,
  },
  {
    title: "Food Tart1",
    image:
      "https://s3-alpha-sig.figma.com/img/abab/8928/c4c79b15138c71b44dc8c2202844dd61?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CaStqjKFMYH9JQ3JAzQZUvWA1gHbrM6aNLo3Ag-t9zGnBR4d~nEU72TfZXUCQESHCOfA8kyT~n8VUFNocPIGtNYqFlxO2DGs~aiEN43~3V5phowRlxojI-kOVvONVHznpJT4~UwnrB9Wx9YY7Y2Px8tkVdFhyyxwf0Uvz7OcVZ3A-YY3i0iQtWHYfFLc7YBnWm0ZLUms3wkiG0ddUHmF~R6m-~ZsDfaggDXgP~ypbbwpe59Q-~QrAjkV-U2XI1xsvKmVbHrA~cddGbHYRS5OcbsuteBjOMnzLQ2i7fs6qNy3h2EZjaO97KfKtXWz1ifdzclHqFfAHI1AOnpgtr2KDw__",
    ingeredient: `Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  `,
    category: "Dessert2",
    price: 2000,
  },
  {
    title: "Main pizza2",
    image:
      "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rc6sysrbnJUOK6z60Doex356W7EP8kR5rqL-SXQ7JIOs22L4CgREcPjXvWQfov8a8FrdakfloFQhavDUQkPaFpalh5XbSlzHwJr0ym5EyEOgm2TlIxVkgBmGYNavyubSaB9zrB~Xw1hP06gLAR7gC~80FLEuk2PjwF4ydylyiJUxKh5PdDUCgzAsNr3V5Q1WycDwjm1P0WOKYMvwFsCDBMi7plXgx19vL8IVH7j1E5ikx5pye19nJXLvqb8rv3J2RoDp2wW9xcAxZA5ZH656aZkRhdaTwSWCrFS4rxDIL9en9Ae5ZZ7ohNHFG-vsIpFLYj1b7b4xodupx9baDfKNtQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Food",
    price: 22000,
  },
  {
    title: "Сэндвич2",
    image:
      "https://s3-alpha-sig.figma.com/img/fe7d/c5a7/8a8c3a1050476c2fdbcb3f74d438adc2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CuBNkp1nPj3GTqQHTyzGwiM3nusYXCV8nNK9I99Yys8lbVbeLWFyXFsnKauCu7FPVXK~6nXkOKFQvVnhYKka3O7FqRcU45CzCwNfS~lB3XJj0FJVkhAuWsWrWNphEEvvoOuzUtepxfOHWYeQ96BYdqfR44-ciJ9cTgrae2SwiOs8BKMSv75DlppR22Qlmc8qNuD-E3VMHUcslNUpQwX7JUI5XKRsz52CKT4RcqbbqBJ9uwuAAMWRQN1WYKcZbS-S1S8o7Hlk2tL0bALpQ4g0kFIELU1hWK8klWDDcyz6qoq4IN54d0P4SAEZlx4HrA-~hWpMFaFK720TfarKd1NlyQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Salat",
    price: 3000,
  },
  {
    title: "Өглөөний цай2",
    image:
      "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhTTCWCIA1hIygHKbpmD7IxbFBdcQ7Sml-gpRwLv9dGBLZwRtcdFA6NKrdjiLZDqivKsoeAUFAeFvS9lw8oFH7RvvB76sIg8GNL5e1H6KHY4fFhTqMxj-tJeHJQXh8B4mp~5RKrQA6gfeMLk4boyz02ZNKUpX7~v1Z9STBHoV5Rb-vuOeAnijSF1~JNV4uxGz0E2DS9EEpIDeTSEQ2-zVxR3vTWejZlU6QWDESpgUqH3PCV~iZ1OYQ7N2qwZf1JbzRAEx9W-JsTx~lfuLGeVxdjlKsbylfSs4qZOwkbLEGR6~d6MfQcr10rZBmTsZ~6eTtVGb4tOIjfuhLKmyuUUKQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Breakfast",
    price: 12000,
  },
  {
    title: "Food Tart3",
    image:
      "https://s3-alpha-sig.figma.com/img/abab/8928/c4c79b15138c71b44dc8c2202844dd61?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CaStqjKFMYH9JQ3JAzQZUvWA1gHbrM6aNLo3Ag-t9zGnBR4d~nEU72TfZXUCQESHCOfA8kyT~n8VUFNocPIGtNYqFlxO2DGs~aiEN43~3V5phowRlxojI-kOVvONVHznpJT4~UwnrB9Wx9YY7Y2Px8tkVdFhyyxwf0Uvz7OcVZ3A-YY3i0iQtWHYfFLc7YBnWm0ZLUms3wkiG0ddUHmF~R6m-~ZsDfaggDXgP~ypbbwpe59Q-~QrAjkV-U2XI1xsvKmVbHrA~cddGbHYRS5OcbsuteBjOMnzLQ2i7fs6qNy3h2EZjaO97KfKtXWz1ifdzclHqFfAHI1AOnpgtr2KDw__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Dessert",
    price: 2000,
  },
  {
    title: "Main pizza3",
    image:
      "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rc6sysrbnJUOK6z60Doex356W7EP8kR5rqL-SXQ7JIOs22L4CgREcPjXvWQfov8a8FrdakfloFQhavDUQkPaFpalh5XbSlzHwJr0ym5EyEOgm2TlIxVkgBmGYNavyubSaB9zrB~Xw1hP06gLAR7gC~80FLEuk2PjwF4ydylyiJUxKh5PdDUCgzAsNr3V5Q1WycDwjm1P0WOKYMvwFsCDBMi7plXgx19vL8IVH7j1E5ikx5pye19nJXLvqb8rv3J2RoDp2wW9xcAxZA5ZH656aZkRhdaTwSWCrFS4rxDIL9en9Ae5ZZ7ohNHFG-vsIpFLYj1b7b4xodupx9baDfKNtQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Food",
    price: 22000,
  },
  {
    title: "Сэндвич3",
    image:
      "https://s3-alpha-sig.figma.com/img/fe7d/c5a7/8a8c3a1050476c2fdbcb3f74d438adc2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CuBNkp1nPj3GTqQHTyzGwiM3nusYXCV8nNK9I99Yys8lbVbeLWFyXFsnKauCu7FPVXK~6nXkOKFQvVnhYKka3O7FqRcU45CzCwNfS~lB3XJj0FJVkhAuWsWrWNphEEvvoOuzUtepxfOHWYeQ96BYdqfR44-ciJ9cTgrae2SwiOs8BKMSv75DlppR22Qlmc8qNuD-E3VMHUcslNUpQwX7JUI5XKRsz52CKT4RcqbbqBJ9uwuAAMWRQN1WYKcZbS-S1S8o7Hlk2tL0bALpQ4g0kFIELU1hWK8klWDDcyz6qoq4IN54d0P4SAEZlx4HrA-~hWpMFaFK720TfarKd1NlyQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Salat",
    price: 3000,
  },
  {
    title: "Өглөөний цай",
    image:
      "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhTTCWCIA1hIygHKbpmD7IxbFBdcQ7Sml-gpRwLv9dGBLZwRtcdFA6NKrdjiLZDqivKsoeAUFAeFvS9lw8oFH7RvvB76sIg8GNL5e1H6KHY4fFhTqMxj-tJeHJQXh8B4mp~5RKrQA6gfeMLk4boyz02ZNKUpX7~v1Z9STBHoV5Rb-vuOeAnijSF1~JNV4uxGz0E2DS9EEpIDeTSEQ2-zVxR3vTWejZlU6QWDESpgUqH3PCV~iZ1OYQ7N2qwZf1JbzRAEx9W-JsTx~lfuLGeVxdjlKsbylfSs4qZOwkbLEGR6~d6MfQcr10rZBmTsZ~6eTtVGb4tOIjfuhLKmyuUUKQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Breakfast",
    price: 12000,
  },
  {
    title: "Food Tart",
    image:
      "https://s3-alpha-sig.figma.com/img/abab/8928/c4c79b15138c71b44dc8c2202844dd61?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CaStqjKFMYH9JQ3JAzQZUvWA1gHbrM6aNLo3Ag-t9zGnBR4d~nEU72TfZXUCQESHCOfA8kyT~n8VUFNocPIGtNYqFlxO2DGs~aiEN43~3V5phowRlxojI-kOVvONVHznpJT4~UwnrB9Wx9YY7Y2Px8tkVdFhyyxwf0Uvz7OcVZ3A-YY3i0iQtWHYfFLc7YBnWm0ZLUms3wkiG0ddUHmF~R6m-~ZsDfaggDXgP~ypbbwpe59Q-~QrAjkV-U2XI1xsvKmVbHrA~cddGbHYRS5OcbsuteBjOMnzLQ2i7fs6qNy3h2EZjaO97KfKtXWz1ifdzclHqFfAHI1AOnpgtr2KDw__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Dessert",
    price: 2000,
  },
  {
    title: "Main pizza",
    image:
      "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rc6sysrbnJUOK6z60Doex356W7EP8kR5rqL-SXQ7JIOs22L4CgREcPjXvWQfov8a8FrdakfloFQhavDUQkPaFpalh5XbSlzHwJr0ym5EyEOgm2TlIxVkgBmGYNavyubSaB9zrB~Xw1hP06gLAR7gC~80FLEuk2PjwF4ydylyiJUxKh5PdDUCgzAsNr3V5Q1WycDwjm1P0WOKYMvwFsCDBMi7plXgx19vL8IVH7j1E5ikx5pye19nJXLvqb8rv3J2RoDp2wW9xcAxZA5ZH656aZkRhdaTwSWCrFS4rxDIL9en9Ae5ZZ7ohNHFG-vsIpFLYj1b7b4xodupx9baDfKNtQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Food",
    price: 22000,
  },
  {
    title: "Сэндвич",
    image:
      "https://s3-alpha-sig.figma.com/img/fe7d/c5a7/8a8c3a1050476c2fdbcb3f74d438adc2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CuBNkp1nPj3GTqQHTyzGwiM3nusYXCV8nNK9I99Yys8lbVbeLWFyXFsnKauCu7FPVXK~6nXkOKFQvVnhYKka3O7FqRcU45CzCwNfS~lB3XJj0FJVkhAuWsWrWNphEEvvoOuzUtepxfOHWYeQ96BYdqfR44-ciJ9cTgrae2SwiOs8BKMSv75DlppR22Qlmc8qNuD-E3VMHUcslNUpQwX7JUI5XKRsz52CKT4RcqbbqBJ9uwuAAMWRQN1WYKcZbS-S1S8o7Hlk2tL0bALpQ4g0kFIELU1hWK8klWDDcyz6qoq4IN54d0P4SAEZlx4HrA-~hWpMFaFK720TfarKd1NlyQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Salat",
    price: 3000,
  },
  {
    title: "Өглөөний цай1",
    image:
      "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhTTCWCIA1hIygHKbpmD7IxbFBdcQ7Sml-gpRwLv9dGBLZwRtcdFA6NKrdjiLZDqivKsoeAUFAeFvS9lw8oFH7RvvB76sIg8GNL5e1H6KHY4fFhTqMxj-tJeHJQXh8B4mp~5RKrQA6gfeMLk4boyz02ZNKUpX7~v1Z9STBHoV5Rb-vuOeAnijSF1~JNV4uxGz0E2DS9EEpIDeTSEQ2-zVxR3vTWejZlU6QWDESpgUqH3PCV~iZ1OYQ7N2qwZf1JbzRAEx9W-JsTx~lfuLGeVxdjlKsbylfSs4qZOwkbLEGR6~d6MfQcr10rZBmTsZ~6eTtVGb4tOIjfuhLKmyuUUKQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Breakfast",
    price: 12000,
  },
  {
    title: "Food Tart1",
    image:
      "https://s3-alpha-sig.figma.com/img/abab/8928/c4c79b15138c71b44dc8c2202844dd61?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CaStqjKFMYH9JQ3JAzQZUvWA1gHbrM6aNLo3Ag-t9zGnBR4d~nEU72TfZXUCQESHCOfA8kyT~n8VUFNocPIGtNYqFlxO2DGs~aiEN43~3V5phowRlxojI-kOVvONVHznpJT4~UwnrB9Wx9YY7Y2Px8tkVdFhyyxwf0Uvz7OcVZ3A-YY3i0iQtWHYfFLc7YBnWm0ZLUms3wkiG0ddUHmF~R6m-~ZsDfaggDXgP~ypbbwpe59Q-~QrAjkV-U2XI1xsvKmVbHrA~cddGbHYRS5OcbsuteBjOMnzLQ2i7fs6qNy3h2EZjaO97KfKtXWz1ifdzclHqFfAHI1AOnpgtr2KDw__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Dessert2",
    price: 2000,
  },
  {
    title: "Main pizza2",
    image:
      "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rc6sysrbnJUOK6z60Doex356W7EP8kR5rqL-SXQ7JIOs22L4CgREcPjXvWQfov8a8FrdakfloFQhavDUQkPaFpalh5XbSlzHwJr0ym5EyEOgm2TlIxVkgBmGYNavyubSaB9zrB~Xw1hP06gLAR7gC~80FLEuk2PjwF4ydylyiJUxKh5PdDUCgzAsNr3V5Q1WycDwjm1P0WOKYMvwFsCDBMi7plXgx19vL8IVH7j1E5ikx5pye19nJXLvqb8rv3J2RoDp2wW9xcAxZA5ZH656aZkRhdaTwSWCrFS4rxDIL9en9Ae5ZZ7ohNHFG-vsIpFLYj1b7b4xodupx9baDfKNtQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Food",
    price: 22000,
  },
  {
    title: "Сэндвич2",
    image:
      "https://s3-alpha-sig.figma.com/img/fe7d/c5a7/8a8c3a1050476c2fdbcb3f74d438adc2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CuBNkp1nPj3GTqQHTyzGwiM3nusYXCV8nNK9I99Yys8lbVbeLWFyXFsnKauCu7FPVXK~6nXkOKFQvVnhYKka3O7FqRcU45CzCwNfS~lB3XJj0FJVkhAuWsWrWNphEEvvoOuzUtepxfOHWYeQ96BYdqfR44-ciJ9cTgrae2SwiOs8BKMSv75DlppR22Qlmc8qNuD-E3VMHUcslNUpQwX7JUI5XKRsz52CKT4RcqbbqBJ9uwuAAMWRQN1WYKcZbS-S1S8o7Hlk2tL0bALpQ4g0kFIELU1hWK8klWDDcyz6qoq4IN54d0P4SAEZlx4HrA-~hWpMFaFK720TfarKd1NlyQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Salat",
    price: 3000,
  },
  {
    title: "Өглөөний цай2",
    image:
      "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhTTCWCIA1hIygHKbpmD7IxbFBdcQ7Sml-gpRwLv9dGBLZwRtcdFA6NKrdjiLZDqivKsoeAUFAeFvS9lw8oFH7RvvB76sIg8GNL5e1H6KHY4fFhTqMxj-tJeHJQXh8B4mp~5RKrQA6gfeMLk4boyz02ZNKUpX7~v1Z9STBHoV5Rb-vuOeAnijSF1~JNV4uxGz0E2DS9EEpIDeTSEQ2-zVxR3vTWejZlU6QWDESpgUqH3PCV~iZ1OYQ7N2qwZf1JbzRAEx9W-JsTx~lfuLGeVxdjlKsbylfSs4qZOwkbLEGR6~d6MfQcr10rZBmTsZ~6eTtVGb4tOIjfuhLKmyuUUKQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Breakfast",
    price: 12000,
  },
  {
    title: "Food Tart3",
    image:
      "https://s3-alpha-sig.figma.com/img/abab/8928/c4c79b15138c71b44dc8c2202844dd61?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CaStqjKFMYH9JQ3JAzQZUvWA1gHbrM6aNLo3Ag-t9zGnBR4d~nEU72TfZXUCQESHCOfA8kyT~n8VUFNocPIGtNYqFlxO2DGs~aiEN43~3V5phowRlxojI-kOVvONVHznpJT4~UwnrB9Wx9YY7Y2Px8tkVdFhyyxwf0Uvz7OcVZ3A-YY3i0iQtWHYfFLc7YBnWm0ZLUms3wkiG0ddUHmF~R6m-~ZsDfaggDXgP~ypbbwpe59Q-~QrAjkV-U2XI1xsvKmVbHrA~cddGbHYRS5OcbsuteBjOMnzLQ2i7fs6qNy3h2EZjaO97KfKtXWz1ifdzclHqFfAHI1AOnpgtr2KDw__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Dessert",
    price: 2000,
  },
  {
    title: "Main pizza3",
    image:
      "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rc6sysrbnJUOK6z60Doex356W7EP8kR5rqL-SXQ7JIOs22L4CgREcPjXvWQfov8a8FrdakfloFQhavDUQkPaFpalh5XbSlzHwJr0ym5EyEOgm2TlIxVkgBmGYNavyubSaB9zrB~Xw1hP06gLAR7gC~80FLEuk2PjwF4ydylyiJUxKh5PdDUCgzAsNr3V5Q1WycDwjm1P0WOKYMvwFsCDBMi7plXgx19vL8IVH7j1E5ikx5pye19nJXLvqb8rv3J2RoDp2wW9xcAxZA5ZH656aZkRhdaTwSWCrFS4rxDIL9en9Ae5ZZ7ohNHFG-vsIpFLYj1b7b4xodupx9baDfKNtQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Food",
    price: 22000,
  },
  {
    title: "Сэндвич3",
    image:
      "https://s3-alpha-sig.figma.com/img/fe7d/c5a7/8a8c3a1050476c2fdbcb3f74d438adc2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CuBNkp1nPj3GTqQHTyzGwiM3nusYXCV8nNK9I99Yys8lbVbeLWFyXFsnKauCu7FPVXK~6nXkOKFQvVnhYKka3O7FqRcU45CzCwNfS~lB3XJj0FJVkhAuWsWrWNphEEvvoOuzUtepxfOHWYeQ96BYdqfR44-ciJ9cTgrae2SwiOs8BKMSv75DlppR22Qlmc8qNuD-E3VMHUcslNUpQwX7JUI5XKRsz52CKT4RcqbbqBJ9uwuAAMWRQN1WYKcZbS-S1S8o7Hlk2tL0bALpQ4g0kFIELU1hWK8klWDDcyz6qoq4IN54d0P4SAEZlx4HrA-~hWpMFaFK720TfarKd1NlyQ__",
    ingeredient: `Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`,
    category: "Salat",
    price: 3000,
  },
];

export default foods;
