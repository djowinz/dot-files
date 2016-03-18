

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var flatten = require('../../utils/flatten');
var markers = require('../../constants/markers');

function printExportNamespaceSpecifier(print, node) {
  return flatten(['*', markers.space, 'as', markers.noBreak, markers.space, print(node.exported)]);
}

module.exports = printExportNamespaceSpecifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50RXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFjQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMvQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7QUFFbkQsU0FBUyw2QkFBNkIsQ0FDcEMsS0FBWSxFQUNaLElBQThCLEVBQ3ZCO0FBQ1AsU0FBTyxPQUFPLENBQUMsQ0FDYixHQUFHLEVBQ0gsT0FBTyxDQUFDLEtBQUssRUFDYixJQUFJLEVBQ0osT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3JCLENBQUMsQ0FBQztDQUNKOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUMiLCJmaWxlIjoicHJpbnRFeHBvcnROYW1lc3BhY2VTcGVjaWZpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7RXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyfSBmcm9tICdhc3QtdHlwZXMtZmxvdyc7XG5pbXBvcnQgdHlwZSB7TGluZXMsIFByaW50fSBmcm9tICcuLi8uLi90eXBlcy9jb21tb24nO1xuXG5jb25zdCBmbGF0dGVuID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZmxhdHRlbicpO1xuY29uc3QgbWFya2VycyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cy9tYXJrZXJzJyk7XG5cbmZ1bmN0aW9uIHByaW50RXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyKFxuICBwcmludDogUHJpbnQsXG4gIG5vZGU6IEV4cG9ydE5hbWVzcGFjZVNwZWNpZmllcixcbik6IExpbmVzIHtcbiAgcmV0dXJuIGZsYXR0ZW4oW1xuICAgICcqJyxcbiAgICBtYXJrZXJzLnNwYWNlLFxuICAgICdhcycsXG4gICAgbWFya2Vycy5ub0JyZWFrLFxuICAgIG1hcmtlcnMuc3BhY2UsXG4gICAgcHJpbnQobm9kZS5leHBvcnRlZCksXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50RXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyO1xuIl19