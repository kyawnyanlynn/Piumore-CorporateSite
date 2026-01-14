import {defineField, defineType} from 'sanity'

export const Notice = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
      title: 'タイトル',
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
      name: 'Date',
      title: '日付け',
      type: 'date',
    }),
    defineField({
      name: 'Content',
      title: 'コンテンツ',
      type: 'text',
    }),
    defineField({
      name: 'Author',
      title: '著者',
      type: 'string',
    }),
  ],
})
