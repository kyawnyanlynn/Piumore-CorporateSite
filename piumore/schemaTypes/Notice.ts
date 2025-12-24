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
      name: 'date',
      type: 'date',
    }),
    defineField({
      name: 'content',
      type: 'text',
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
  ],
})
