import {
  CommentCreated as CommentCreatedEvent,
  PostCreated as PostCreatedEvent
} from "../generated/IDeyVex/IDeyVex"
import { CommentCreated, PostCreated } from "../generated/schema"

export function handleCommentCreated(event: CommentCreatedEvent): void {
  let entity = new CommentCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.body = event.params.body
  entity.author = event.params.author

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostCreated(event: PostCreatedEvent): void {
  let entity = new PostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.IDeyVex_id = event.params.id
  entity.body = event.params.body
  entity.author = event.params.author

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
