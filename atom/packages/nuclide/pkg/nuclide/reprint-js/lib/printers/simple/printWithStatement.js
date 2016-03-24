

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var markers = require('../../constants/markers');
var wrapStatement = require('../../wrappers/simple/wrapStatement');

function printWithStatement(print, node) {
  var wrap = function wrap(x) {
    return wrapStatement(print, node, x);
  };
  return wrap([markers.hardBreak, 'with (', markers.openScope, markers.scopeIndent, markers.scopeBreak, print(node.object), markers.scopeBreak, markers.scopeDedent, markers.closeScope, ')', markers.space, print(node.body)]);
}

module.exports = printWithStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50V2l0aFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBY0EsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDbkQsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7O0FBRXJFLFNBQVMsa0JBQWtCLENBQUMsS0FBWSxFQUFFLElBQW1CLEVBQVM7QUFDcEUsTUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLENBQUcsQ0FBQztXQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztHQUFBLENBQUM7QUFDaEQsU0FBTyxJQUFJLENBQUMsQ0FDVixPQUFPLENBQUMsU0FBUyxFQUNqQixRQUFRLEVBQ1IsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDbEIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsR0FBRyxFQUNILE9BQU8sQ0FBQyxLQUFLLEVBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDakIsQ0FBQyxDQUFDO0NBQ0o7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJwcmludFdpdGhTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7TGluZXMsIFByaW50fSBmcm9tICcuLi8uLi90eXBlcy9jb21tb24nO1xuaW1wb3J0IHR5cGUge1dpdGhTdGF0ZW1lbnR9IGZyb20gJ2FzdC10eXBlcy1mbG93JztcblxuY29uc3QgbWFya2VycyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cy9tYXJrZXJzJyk7XG5jb25zdCB3cmFwU3RhdGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vd3JhcHBlcnMvc2ltcGxlL3dyYXBTdGF0ZW1lbnQnKTtcblxuZnVuY3Rpb24gcHJpbnRXaXRoU3RhdGVtZW50KHByaW50OiBQcmludCwgbm9kZTogV2l0aFN0YXRlbWVudCk6IExpbmVzIHtcbiAgY29uc3Qgd3JhcCA9IHggPT4gd3JhcFN0YXRlbWVudChwcmludCwgbm9kZSwgeCk7XG4gIHJldHVybiB3cmFwKFtcbiAgICBtYXJrZXJzLmhhcmRCcmVhayxcbiAgICAnd2l0aCAoJyxcbiAgICBtYXJrZXJzLm9wZW5TY29wZSxcbiAgICBtYXJrZXJzLnNjb3BlSW5kZW50LFxuICAgIG1hcmtlcnMuc2NvcGVCcmVhayxcbiAgICBwcmludChub2RlLm9iamVjdCksXG4gICAgbWFya2Vycy5zY29wZUJyZWFrLFxuICAgIG1hcmtlcnMuc2NvcGVEZWRlbnQsXG4gICAgbWFya2Vycy5jbG9zZVNjb3BlLFxuICAgICcpJyxcbiAgICBtYXJrZXJzLnNwYWNlLFxuICAgIHByaW50KG5vZGUuYm9keSksXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50V2l0aFN0YXRlbWVudDtcbiJdfQ==