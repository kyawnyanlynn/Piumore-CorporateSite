import {defineField, defineType} from 'sanity'

export const Notice = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
    }),
    defineField({
      name: 'date',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'string',
    }),
  ],
})
