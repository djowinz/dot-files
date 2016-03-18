
// Flow didn't like it when I tried import type here. This shouldn't affect
// performance though, since LinterAdapter requires this anyway.

var _providerBase = require('../../provider-base');

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _LinterAdapter = require('./LinterAdapter');

function createSingleAdapter(provider, ProviderBase) {
  if (provider.disabledForNuclide) {
    return;
  }
  var validationErrors = validateLinter(provider);
  if (validationErrors.length === 0) {
    return new _LinterAdapter.LinterAdapter(provider, ProviderBase);
  } else {
    var nameString = provider && provider.providerName ? ' (' + provider.providerName + ')' : '';
    var message = 'nuclide-diagnostics-store found problems with a linter' + nameString + '. ' + 'Diagnostic messages from that linter will be unavailable.\n';
    message += validationErrors.map(function (error) {
      return '- ' + error + '\n';
    }).join('');
    atom.notifications.addError(message, { dismissable: true });
    return null;
  }
}

function addSingleAdapter(adapters, provider, ProviderBase) {
  var adapter = createSingleAdapter(provider);
  if (adapter) {
    adapters.add(adapter);
  }
}

function createAdapters(providers, ProviderBase) {
  var adapters = new Set();
  if (Array.isArray(providers)) {
    for (var provider of providers) {
      addSingleAdapter(adapters, provider);
    }
  } else {
    addSingleAdapter(adapters, providers);
  }
  return adapters;
}

function validateLinter(provider) {
  var errors = [];
  validate(provider, 'Must not be undefined', errors);

  if (errors.length === 0) {
    validate(provider.grammarScopes, 'Must specify grammarScopes', errors);
    validate(Array.isArray(provider.grammarScopes), 'grammarScopes must be an Array', errors);
    if (errors.length === 0) {
      for (var grammar of provider.grammarScopes) {
        validate(typeof grammar === 'string', 'Each grammarScope entry must be a string: ' + grammar, errors);
      }
    }

    validate(provider.scope === 'file' || provider.scope === 'project', 'Scope must be \'file\' or \'project\'; found \'' + provider.scope + '\'', errors);

    if (provider.scope === 'project') {
      validate(!provider.lintOnFly, "lintOnFly must be false for a linter with 'project' scope", errors);
    }

    validate(provider.lint, 'lint function must be specified', errors);
    validate(typeof provider.lint === 'function', 'lint must be a function', errors);

    if (provider.providerName) {
      validate(typeof provider.providerName === 'string', 'providerName must be a string', errors);
    }
  }

  return errors;
}

function validate(condition, msg, errors) {
  if (!condition) {
    errors.push(msg);
  }
}

module.exports = { createAdapters: createAdapters, validateLinter: validateLinter };
//# sourceMappingURL=data:application/json;base64,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SyxTQUFTLEVBQUU7QUFDaEMsY0FBUSxDQUNOLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFDbkIsMkRBQTJELEVBQzNELE1BQU0sQ0FDUCxDQUFDO0tBQ0g7O0FBRUQsWUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkUsWUFBUSxDQUFDLE9BQU8sUUFBUSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRWpGLFFBQUksUUFBUSxDQUFDLFlBQVksRUFBRTtBQUN6QixjQUFRLENBQUMsT0FBTyxRQUFRLENBQUMsWUFBWSxLQUFLLFFBQVEsRUFBRSwrQkFBK0IsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM5RjtHQUNGOztBQUVELFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRUQsU0FBUyxRQUFRLENBQUMsU0FBZ0IsRUFBRSxHQUFXLEVBQUUsTUFBcUIsRUFBUTtBQUM1RSxNQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2QsVUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNsQjtDQUNGOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxjQUFjLEVBQWQsY0FBYyxFQUFFLGNBQWMsRUFBZCxjQUFjLEVBQUUsQ0FBQyIsImZpbGUiOiJMaW50ZXJBZGFwdGVyRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuLyogQGZsb3cgKi9cblxuLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB0eXBlIHtMaW50ZXJQcm92aWRlcn0gZnJvbSAnLi9MaW50ZXJBZGFwdGVyJztcbi8vIEZsb3cgZGlkbid0IGxpa2UgaXQgd2hlbiBJIHRyaWVkIGltcG9ydCB0eXBlIGhlcmUuIFRoaXMgc2hvdWxkbid0IGFmZmVjdFxuLy8gcGVyZm9ybWFuY2UgdGhvdWdoLCBzaW5jZSBMaW50ZXJBZGFwdGVyIHJlcXVpcmVzIHRoaXMgYW55d2F5LlxuaW1wb3J0IHtEaWFnbm9zdGljc1Byb3ZpZGVyQmFzZX0gZnJvbSAnLi4vLi4vcHJvdmlkZXItYmFzZSc7XG5pbXBvcnQge0xpbnRlckFkYXB0ZXJ9IGZyb20gJy4vTGludGVyQWRhcHRlcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZUFkYXB0ZXIoXG4gIHByb3ZpZGVyOiBMaW50ZXJQcm92aWRlcixcbiAgUHJvdmlkZXJCYXNlPzogdHlwZW9mIERpYWdub3N0aWNzUHJvdmlkZXJCYXNlLFxuKTogP0xpbnRlckFkYXB0ZXIge1xuICBpZiAocHJvdmlkZXIuZGlzYWJsZWRGb3JOdWNsaWRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZhbGlkYXRpb25FcnJvcnMgPSB2YWxpZGF0ZUxpbnRlcihwcm92aWRlcik7XG4gIGlmICh2YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgTGludGVyQWRhcHRlcihwcm92aWRlciwgUHJvdmlkZXJCYXNlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuYW1lU3RyaW5nID0gcHJvdmlkZXIgJiYgcHJvdmlkZXIucHJvdmlkZXJOYW1lID8gYCAoJHtwcm92aWRlci5wcm92aWRlck5hbWV9KWAgOiAnJztcbiAgICBsZXQgbWVzc2FnZSA9IGBudWNsaWRlLWRpYWdub3N0aWNzLXN0b3JlIGZvdW5kIHByb2JsZW1zIHdpdGggYSBsaW50ZXIke25hbWVTdHJpbmd9LiBgICtcbiAgICAgICdEaWFnbm9zdGljIG1lc3NhZ2VzIGZyb20gdGhhdCBsaW50ZXIgd2lsbCBiZSB1bmF2YWlsYWJsZS5cXG4nO1xuICAgIG1lc3NhZ2UgKz0gdmFsaWRhdGlvbkVycm9ycy5tYXAoZXJyb3IgPT4gYC0gJHtlcnJvcn1cXG5gKS5qb2luKCcnKTtcbiAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IobWVzc2FnZSwge2Rpc21pc3NhYmxlOiB0cnVlfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU2luZ2xlQWRhcHRlcihcbiAgYWRhcHRlcnM6IFNldDxMaW50ZXJBZGFwdGVyPixcbiAgcHJvdmlkZXI6IExpbnRlclByb3ZpZGVyLFxuICBQcm92aWRlckJhc2U/OiB0eXBlb2YgRGlhZ25vc3RpY3NQcm92aWRlckJhc2UsXG4pOiB2b2lkIHtcbiAgY29uc3QgYWRhcHRlcjogP0xpbnRlckFkYXB0ZXIgPSBjcmVhdGVTaW5nbGVBZGFwdGVyKHByb3ZpZGVyKTtcbiAgaWYgKGFkYXB0ZXIpIHtcbiAgICBhZGFwdGVycy5hZGQoYWRhcHRlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRhcHRlcnMoXG4gIHByb3ZpZGVyczogTGludGVyUHJvdmlkZXIgfCBBcnJheTxMaW50ZXJQcm92aWRlcj4sXG4gIFByb3ZpZGVyQmFzZT86IHR5cGVvZiBEaWFnbm9zdGljc1Byb3ZpZGVyQmFzZSxcbik6IFNldDxMaW50ZXJBZGFwdGVyPiB7XG4gIGNvbnN0IGFkYXB0ZXJzID0gbmV3IFNldCgpO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm92aWRlcnMpKSB7XG4gICAgZm9yIChjb25zdCBwcm92aWRlciBvZiBwcm92aWRlcnMpIHtcbiAgICAgIGFkZFNpbmdsZUFkYXB0ZXIoYWRhcHRlcnMsIHByb3ZpZGVyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYWRkU2luZ2xlQWRhcHRlcihhZGFwdGVycywgcHJvdmlkZXJzKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGludGVyKHByb3ZpZGVyOiBMaW50ZXJQcm92aWRlcik6IEFycmF5PHN0cmluZz4ge1xuICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgdmFsaWRhdGUocHJvdmlkZXIsICdNdXN0IG5vdCBiZSB1bmRlZmluZWQnLCBlcnJvcnMpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgdmFsaWRhdGUocHJvdmlkZXIuZ3JhbW1hclNjb3BlcywgJ011c3Qgc3BlY2lmeSBncmFtbWFyU2NvcGVzJywgZXJyb3JzKTtcbiAgICB2YWxpZGF0ZShBcnJheS5pc0FycmF5KHByb3ZpZGVyLmdyYW1tYXJTY29wZXMpLCAnZ3JhbW1hclNjb3BlcyBtdXN0IGJlIGFuIEFycmF5JywgZXJyb3JzKTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZm9yIChjb25zdCBncmFtbWFyIG9mIHByb3ZpZGVyLmdyYW1tYXJTY29wZXMpIHtcbiAgICAgICAgdmFsaWRhdGUoXG4gICAgICAgICAgdHlwZW9mIGdyYW1tYXIgPT09ICdzdHJpbmcnLFxuICAgICAgICAgIGBFYWNoIGdyYW1tYXJTY29wZSBlbnRyeSBtdXN0IGJlIGEgc3RyaW5nOiAke2dyYW1tYXJ9YCxcbiAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoXG4gICAgICBwcm92aWRlci5zY29wZSA9PT0gJ2ZpbGUnIHx8IHByb3ZpZGVyLnNjb3BlID09PSAncHJvamVjdCcsXG4gICAgICBgU2NvcGUgbXVzdCBiZSAnZmlsZScgb3IgJ3Byb2plY3QnOyBmb3VuZCAnJHtwcm92aWRlci5zY29wZX0nYCxcbiAgICAgIGVycm9ycyxcbiAgICApO1xuXG4gICAgaWYgKHByb3ZpZGVyLnNjb3BlID09PSAncHJvamVjdCcpIHtcbiAgICAgIHZhbGlkYXRlKFxuICAgICAgICAhcHJvdmlkZXIubGludE9uRmx5LFxuICAgICAgICBcImxpbnRPbkZseSBtdXN0IGJlIGZhbHNlIGZvciBhIGxpbnRlciB3aXRoICdwcm9qZWN0JyBzY29wZVwiLFxuICAgICAgICBlcnJvcnMsXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKHByb3ZpZGVyLmxpbnQsICdsaW50IGZ1bmN0aW9uIG11c3QgYmUgc3BlY2lmaWVkJywgZXJyb3JzKTtcbiAgICB2YWxpZGF0ZSh0eXBlb2YgcHJvdmlkZXIubGludCA9PT0gJ2Z1bmN0aW9uJywgJ2xpbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJywgZXJyb3JzKTtcblxuICAgIGlmIChwcm92aWRlci5wcm92aWRlck5hbWUpIHtcbiAgICAgIHZhbGlkYXRlKHR5cGVvZiBwcm92aWRlci5wcm92aWRlck5hbWUgPT09ICdzdHJpbmcnLCAncHJvdmlkZXJOYW1lIG11c3QgYmUgYSBzdHJpbmcnLCBlcnJvcnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKGNvbmRpdGlvbjogbWl4ZWQsIG1zZzogc3RyaW5nLCBlcnJvcnM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICBlcnJvcnMucHVzaChtc2cpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBjcmVhdGVBZGFwdGVycywgdmFsaWRhdGVMaW50ZXIgfTtcbiJdfQ==