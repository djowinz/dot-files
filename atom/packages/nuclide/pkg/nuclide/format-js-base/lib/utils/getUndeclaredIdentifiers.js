

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var getDeclaredIdentifiers = require('./getDeclaredIdentifiers');
var getNonDeclarationIdentifiers = require('./getNonDeclarationIdentifiers');

/**
 * This will get a list of all identifiers that are used but undeclared.
 */
function getUndeclaredIdentifiers(root, options) {
  var declared = getDeclaredIdentifiers(root, options);
  var undeclared = getNonDeclarationIdentifiers(root);
  // now remove anything that was declared
  for (var _name of declared) {
    undeclared['delete'](_name);
  }
  return undeclared;
}

module.exports = getUndeclaredIdentifiers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFVuZGVjbGFyZWRJZGVudGlmaWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBY0EsSUFBTSxzQkFBc0IsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNuRSxJQUFNLDRCQUE0QixHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOzs7OztBQUsvRSxTQUFTLHdCQUF3QixDQUMvQixJQUFnQixFQUNoQixPQUFzQixFQUNUO0FBQ2IsTUFBTSxRQUFRLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sVUFBVSxHQUFHLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV0RCxPQUFLLElBQU0sS0FBSSxJQUFJLFFBQVEsRUFBRTtBQUMzQixjQUFVLFVBQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQztHQUN6QjtBQUNELFNBQU8sVUFBVSxDQUFDO0NBQ25COztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsd0JBQXdCLENBQUMiLCJmaWxlIjoiZ2V0VW5kZWNsYXJlZElkZW50aWZpZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG4vKiBAZmxvdyAqL1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHR5cGUge0NvbGxlY3Rpb259IGZyb20gJy4uL3R5cGVzL2FzdCc7XG5pbXBvcnQgdHlwZSB7U291cmNlT3B0aW9uc30gZnJvbSAnLi4vb3B0aW9ucy9Tb3VyY2VPcHRpb25zJztcblxuY29uc3QgZ2V0RGVjbGFyZWRJZGVudGlmaWVycyA9IHJlcXVpcmUoJy4vZ2V0RGVjbGFyZWRJZGVudGlmaWVycycpO1xuY29uc3QgZ2V0Tm9uRGVjbGFyYXRpb25JZGVudGlmaWVycyA9IHJlcXVpcmUoJy4vZ2V0Tm9uRGVjbGFyYXRpb25JZGVudGlmaWVycycpO1xuXG4vKipcbiAqIFRoaXMgd2lsbCBnZXQgYSBsaXN0IG9mIGFsbCBpZGVudGlmaWVycyB0aGF0IGFyZSB1c2VkIGJ1dCB1bmRlY2xhcmVkLlxuICovXG5mdW5jdGlvbiBnZXRVbmRlY2xhcmVkSWRlbnRpZmllcnMoXG4gIHJvb3Q6IENvbGxlY3Rpb24sXG4gIG9wdGlvbnM6IFNvdXJjZU9wdGlvbnNcbik6IFNldDxzdHJpbmc+IHtcbiAgY29uc3QgZGVjbGFyZWQgPSBnZXREZWNsYXJlZElkZW50aWZpZXJzKHJvb3QsIG9wdGlvbnMpO1xuICBjb25zdCB1bmRlY2xhcmVkID0gZ2V0Tm9uRGVjbGFyYXRpb25JZGVudGlmaWVycyhyb290KTtcbiAgLy8gbm93IHJlbW92ZSBhbnl0aGluZyB0aGF0IHdhcyBkZWNsYXJlZFxuICBmb3IgKGNvbnN0IG5hbWUgb2YgZGVjbGFyZWQpIHtcbiAgICB1bmRlY2xhcmVkLmRlbGV0ZShuYW1lKTtcbiAgfVxuICByZXR1cm4gdW5kZWNsYXJlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRVbmRlY2xhcmVkSWRlbnRpZmllcnM7XG4iXX0=