import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CommentCreated, PostCreated } from "../generated/IDeyVex/IDeyVex"

export function createCommentCreatedEvent(
  body: string,
  author: Address
): CommentCreated {
  let commentCreatedEvent = changetype<CommentCreated>(newMockEvent())

  commentCreatedEvent.parameters = new Array()

  commentCreatedEvent.parameters.push(
    new ethereum.EventParam("body", ethereum.Value.fromString(body))
  )
  commentCreatedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return commentCreatedEvent
}

export function createPostCreatedEvent(
  id: BigInt,
  body: string,
  author: Address
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("body", ethereum.Value.fromString(body))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return postCreatedEvent
}
