import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CommentCreated } from "../generated/schema"
import { CommentCreated as CommentCreatedEvent } from "../generated/IDeyVex/IDeyVex"
import { handleCommentCreated } from "../src/i-dey-vex"
import { createCommentCreatedEvent } from "./i-dey-vex-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let body = "Example string value"
    let author = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCommentCreatedEvent = createCommentCreatedEvent(body, author)
    handleCommentCreated(newCommentCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CommentCreated created and stored", () => {
    assert.entityCount("CommentCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CommentCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "body",
      "Example string value"
    )
    assert.fieldEquals(
      "CommentCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "author",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
