import {defineField, defineType} from 'sanity'

export const Notice = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'タイトル',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'header', // auto-generate from header
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: '日付け',
      type: 'date',
    }),
    defineField({
      name: 'コンテンツ',
      type: 'text',
    }),
    defineField({
      name: '著者',
      type: 'string',
    }),
  ],
})
