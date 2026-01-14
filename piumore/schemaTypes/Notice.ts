import {defineField, defineType} from 'sanity'

export const Notice = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
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
      type: 'date',
    }),
    defineField({
      name: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'Author',
      type: 'string',
    }),
  ],
})
