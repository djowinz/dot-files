

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _helpers = require('./helpers');

/**
 * A dbgp Frame after it is converted from XML to JSON:
 * {
 *   "$":{
 *     "where":"{main}",
 *     "level":"0",
 *     "type":"file",
 *     "filename":"file:///home/peterhal/test/dbgp/test-client.php",
 *     "lineno":"2"
 *   }
 * }
 */

function idOfFrame(frame) {
  // TODO: Mangle in the transactionId of the most recent pause/status.
  return frame.$.level;
}

function functionOfFrame(frame) {
  return frame.$.where;
}

// Returns an absolute path
function fileOfFrame(frame) {
  return (0, _helpers.uriToPath)(fileUrlOfFrame(frame));
}

function fileUrlOfFrame(frame) {
  return frame.$.filename;
}

function locationOfFrame(frame) {
  return {
    // TODO: columnNumber: from cmdbegin/end
    lineNumber: Number(frame.$.lineno) - 1,
    scriptId: fileOfFrame(frame)
  };
}

module.exports = {
  idOfFrame: idOfFrame,
  functionOfFrame: functionOfFrame,
  fileOfFrame: fileOfFrame,
  fileUrlOfFrame: fileUrlOfFrame,
  locationOfFrame: locationOfFrame
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7dUJBWXdCLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQTZCbkMsU0FBUyxTQUFTLENBQUMsS0FBcUIsRUFBVTs7QUFFaEQsU0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztDQUN0Qjs7QUFFRCxTQUFTLGVBQWUsQ0FBQyxLQUFxQixFQUFVO0FBQ3RELFNBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Q0FDdEI7OztBQUdELFNBQVMsV0FBVyxDQUFDLEtBQXFCLEVBQVU7QUFDbEQsU0FBTyx3QkFBVSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUN6Qzs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxLQUFxQixFQUFVO0FBQ3JELFNBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Q0FDekI7O0FBRUQsU0FBUyxlQUFlLENBQUMsS0FBcUIsRUFBaUI7QUFDN0QsU0FBTzs7QUFFTCxjQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUN0QyxZQUFRLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQztHQUM3QixDQUFDO0NBQ0g7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLFdBQVMsRUFBVCxTQUFTO0FBQ1QsaUJBQWUsRUFBZixlQUFlO0FBQ2YsYUFBVyxFQUFYLFdBQVc7QUFDWCxnQkFBYyxFQUFkLGNBQWM7QUFDZCxpQkFBZSxFQUFmLGVBQWU7Q0FDaEIsQ0FBQyIsImZpbGUiOiJmcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuLyogQGZsb3cgKi9cblxuLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuaW1wb3J0IHt1cmlUb1BhdGh9IGZyb20gJy4vaGVscGVycyc7XG5cbi8qKlxuICogQSBkYmdwIEZyYW1lIGFmdGVyIGl0IGlzIGNvbnZlcnRlZCBmcm9tIFhNTCB0byBKU09OOlxuICoge1xuICogICBcIiRcIjp7XG4gKiAgICAgXCJ3aGVyZVwiOlwie21haW59XCIsXG4gKiAgICAgXCJsZXZlbFwiOlwiMFwiLFxuICogICAgIFwidHlwZVwiOlwiZmlsZVwiLFxuICogICAgIFwiZmlsZW5hbWVcIjpcImZpbGU6Ly8vaG9tZS9wZXRlcmhhbC90ZXN0L2RiZ3AvdGVzdC1jbGllbnQucGhwXCIsXG4gKiAgICAgXCJsaW5lbm9cIjpcIjJcIlxuICogICB9XG4gKiB9XG4gKi9cbnR5cGUgRGJncFN0YWNrRnJhbWUgPSB7XG4gICQ6IHtcbiAgICB3aGVyZTogc3RyaW5nO1xuICAgIGxldmVsOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgbGluZW5vOiBzdHJpbmc7XG4gIH1cbn07XG5cbnR5cGUgRnJhbWVMb2NhdGlvbiA9IHtcbiAgbGluZU51bWJlcjogbnVtYmVyLFxuICBzY3JpcHRJZDogc3RyaW5nXG59O1xuXG5mdW5jdGlvbiBpZE9mRnJhbWUoZnJhbWU6IERiZ3BTdGFja0ZyYW1lKTogc3RyaW5nIHtcbiAgLy8gVE9ETzogTWFuZ2xlIGluIHRoZSB0cmFuc2FjdGlvbklkIG9mIHRoZSBtb3N0IHJlY2VudCBwYXVzZS9zdGF0dXMuXG4gIHJldHVybiBmcmFtZS4kLmxldmVsO1xufVxuXG5mdW5jdGlvbiBmdW5jdGlvbk9mRnJhbWUoZnJhbWU6IERiZ3BTdGFja0ZyYW1lKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZyYW1lLiQud2hlcmU7XG59XG5cbi8vIFJldHVybnMgYW4gYWJzb2x1dGUgcGF0aFxuZnVuY3Rpb24gZmlsZU9mRnJhbWUoZnJhbWU6IERiZ3BTdGFja0ZyYW1lKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVyaVRvUGF0aChmaWxlVXJsT2ZGcmFtZShmcmFtZSkpO1xufVxuXG5mdW5jdGlvbiBmaWxlVXJsT2ZGcmFtZShmcmFtZTogRGJncFN0YWNrRnJhbWUpOiBzdHJpbmcge1xuICByZXR1cm4gZnJhbWUuJC5maWxlbmFtZTtcbn1cblxuZnVuY3Rpb24gbG9jYXRpb25PZkZyYW1lKGZyYW1lOiBEYmdwU3RhY2tGcmFtZSk6IEZyYW1lTG9jYXRpb24ge1xuICByZXR1cm4ge1xuICAgIC8vIFRPRE86IGNvbHVtbk51bWJlcjogZnJvbSBjbWRiZWdpbi9lbmRcbiAgICBsaW5lTnVtYmVyOiBOdW1iZXIoZnJhbWUuJC5saW5lbm8pIC0gMSxcbiAgICBzY3JpcHRJZDogZmlsZU9mRnJhbWUoZnJhbWUpLFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaWRPZkZyYW1lLFxuICBmdW5jdGlvbk9mRnJhbWUsXG4gIGZpbGVPZkZyYW1lLFxuICBmaWxlVXJsT2ZGcmFtZSxcbiAgbG9jYXRpb25PZkZyYW1lLFxufTtcbiJdfQ==