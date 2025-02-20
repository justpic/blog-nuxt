import { defineEventHandler } from 'h3'
import db from '~/db'
import { comments } from '~/db/schema'
import { CommentInsert } from '~/types/models/comments'

export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, 'id')
  if (!postId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Post Id is empty',
    })
  }
  // @ts-ignore: Object is possibly 'null'.
  // console.log(event.req.connection.remoteAddress)
  const ipAddress = '123.123' // event.headers.get('x-forwarded-for').split(',').pop() // || event.req.connection.remoteAddress
  const body = await readBody(event)
  // @TODO: Add bcrypt
  const newComment: CommentInsert = {
    ...body,
    postId,
    ipAddress,
  }

  const inserted = await db.insert(comments).values(newComment)
  console.log(inserted, inserted)
  return inserted
})
