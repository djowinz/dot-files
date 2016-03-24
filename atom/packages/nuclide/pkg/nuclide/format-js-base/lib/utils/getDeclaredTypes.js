

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var jscs = require('jscodeshift');

var CONFIG = [{
  searchTerms: [jscs.ImportDeclaration, { importKind: 'type' }],
  filters: [],
  getNodes: function getNodes(path) {
    return path.node.specifiers.map(function (specifier) {
      return specifier.local;
    });
  }
}, {
  searchTerms: [jscs.TypeAlias],
  filters: [],
  getNodes: function getNodes(path) {
    return [path.node.id];
  }
}, {
  searchTerms: [jscs.TypeParameterDeclaration],
  filters: [],
  getNodes: function getNodes(path) {
    return path.node.params;
  }
},

// TODO: remove these, they should be covered by TypeParameterDeclaration
// but there is a bug in jscodeshift
{
  searchTerms: [jscs.ClassDeclaration],
  filters: [function (path) {
    return path.node.typeParameters && Array.isArray(path.node.typeParameters.params);
  }],
  getNodes: function getNodes(path) {
    return path.node.typeParameters.params;
  }
}];

/**
 * This will get a list of all flow types that are declared within root's AST
 */
function getDeclaredTypes(root, options, filters) {
  // Start with the built in types that are always declared.
  var moduleMap = options.moduleMap;

  var ids = new Set(moduleMap.getBuiltInTypes());
  CONFIG.forEach(function (config) {
    root.find(config.searchTerms[0], config.searchTerms[1]).filter(function (path) {
      return filters ? filters.every(function (filter) {
        return filter(path);
      }) : true;
    }).filter(function (path) {
      return config.filters.every(function (filter) {
        return filter(path);
      });
    }).forEach(function (path) {
      var nodes = config.getNodes(path);
      nodes.forEach(function (node) {
        if (jscs.Identifier.check(node)) {
          ids.add(node.name);
        }
      });
    });
  });
  return ids;
}

module.exports = getDeclaredTypes;
//# sourceMappingURL=data:application/json;base64,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Z0JBQWdCLENBQUMiLCJmaWxlIjoiZ2V0RGVjbGFyZWRUeXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuLyogQGZsb3cgKi9cblxuLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB0eXBlIHtDb2xsZWN0aW9uLCBOb2RlLCBOb2RlUGF0aH0gZnJvbSAnLi4vdHlwZXMvYXN0JztcbmltcG9ydCB0eXBlIHtTb3VyY2VPcHRpb25zfSBmcm9tICcuLi9vcHRpb25zL1NvdXJjZU9wdGlvbnMnO1xuXG5jb25zdCBqc2NzID0gcmVxdWlyZSgnanNjb2Rlc2hpZnQnKTtcblxudHlwZSBDb25maWdFbnRyeSA9IHtcbiAgc2VhcmNoVGVybXM6IFthbnksIE9iamVjdF0sXG4gIGZpbHRlcnM6IEFycmF5PChwYXRoOiBOb2RlUGF0aCkgPT4gYm9vbGVhbj4sXG4gIGdldE5vZGVzOiAocGF0aDogTm9kZVBhdGgpID0+IEFycmF5PE5vZGU+LFxufTtcblxuY29uc3QgQ09ORklHOiBBcnJheTxDb25maWdFbnRyeT4gPSBbXG4gIHtcbiAgICBzZWFyY2hUZXJtczogW1xuICAgICAganNjcy5JbXBvcnREZWNsYXJhdGlvbixcbiAgICAgIHtpbXBvcnRLaW5kOiAndHlwZSd9LFxuICAgIF0sXG4gICAgZmlsdGVyczogW10sXG4gICAgZ2V0Tm9kZXM6IHBhdGggPT4gcGF0aC5ub2RlLnNwZWNpZmllcnMubWFwKHNwZWNpZmllciA9PiBzcGVjaWZpZXIubG9jYWwpLFxuICB9LFxuICB7XG4gICAgc2VhcmNoVGVybXM6IFtqc2NzLlR5cGVBbGlhc10sXG4gICAgZmlsdGVyczogW10sXG4gICAgZ2V0Tm9kZXM6IHBhdGggPT4gW3BhdGgubm9kZS5pZF0sXG4gIH0sXG4gIHtcbiAgICBzZWFyY2hUZXJtczogW2pzY3MuVHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uXSxcbiAgICBmaWx0ZXJzOiBbXSxcbiAgICBnZXROb2RlczogcGF0aCA9PiBwYXRoLm5vZGUucGFyYW1zLFxuICB9LFxuXG4gIC8vIFRPRE86IHJlbW92ZSB0aGVzZSwgdGhleSBzaG91bGQgYmUgY292ZXJlZCBieSBUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb25cbiAgLy8gYnV0IHRoZXJlIGlzIGEgYnVnIGluIGpzY29kZXNoaWZ0XG4gIHtcbiAgICBzZWFyY2hUZXJtczogW2pzY3MuQ2xhc3NEZWNsYXJhdGlvbl0sXG4gICAgZmlsdGVyczogW1xuICAgICAgcGF0aCA9PiAoXG4gICAgICAgIHBhdGgubm9kZS50eXBlUGFyYW1ldGVycyAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHBhdGgubm9kZS50eXBlUGFyYW1ldGVycy5wYXJhbXMpXG4gICAgICApLFxuICAgIF0sXG4gICAgZ2V0Tm9kZXM6IHBhdGggPT4gcGF0aC5ub2RlLnR5cGVQYXJhbWV0ZXJzLnBhcmFtcyxcbiAgfSxcbl07XG5cbi8qKlxuICogVGhpcyB3aWxsIGdldCBhIGxpc3Qgb2YgYWxsIGZsb3cgdHlwZXMgdGhhdCBhcmUgZGVjbGFyZWQgd2l0aGluIHJvb3QncyBBU1RcbiAqL1xuZnVuY3Rpb24gZ2V0RGVjbGFyZWRUeXBlcyhcbiAgcm9vdDogQ29sbGVjdGlvbixcbiAgb3B0aW9uczogU291cmNlT3B0aW9ucyxcbiAgZmlsdGVycz86ID9BcnJheTwocGF0aDogTm9kZVBhdGgpID0+IGJvb2xlYW4+XG4pOiBTZXQ8c3RyaW5nPiB7XG4gIC8vIFN0YXJ0IHdpdGggdGhlIGJ1aWx0IGluIHR5cGVzIHRoYXQgYXJlIGFsd2F5cyBkZWNsYXJlZC5cbiAgY29uc3Qge21vZHVsZU1hcH0gPSBvcHRpb25zO1xuICBjb25zdCBpZHMgPSBuZXcgU2V0KG1vZHVsZU1hcC5nZXRCdWlsdEluVHlwZXMoKSk7XG4gIENPTkZJRy5mb3JFYWNoKGNvbmZpZyA9PiB7XG4gICAgcm9vdFxuICAgICAgLmZpbmQoY29uZmlnLnNlYXJjaFRlcm1zWzBdLCBjb25maWcuc2VhcmNoVGVybXNbMV0pXG4gICAgICAuZmlsdGVyKHBhdGggPT4gZmlsdGVycyA/IGZpbHRlcnMuZXZlcnkoZmlsdGVyID0+IGZpbHRlcihwYXRoKSkgOiB0cnVlKVxuICAgICAgLmZpbHRlcihwYXRoID0+IGNvbmZpZy5maWx0ZXJzLmV2ZXJ5KGZpbHRlciA9PiBmaWx0ZXIocGF0aCkpKVxuICAgICAgLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY29uZmlnLmdldE5vZGVzKHBhdGgpO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIGlmIChqc2NzLklkZW50aWZpZXIuY2hlY2sobm9kZSkpIHtcbiAgICAgICAgICAgIGlkcy5hZGQobm9kZS5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0pO1xuICByZXR1cm4gaWRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERlY2xhcmVkVHlwZXM7XG4iXX0=