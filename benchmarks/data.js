window.BENCHMARK_DATA = {
  "lastUpdate": 1759259504830,
  "repoUrl": "https://github.com/thorstone137/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "640e758c2434183ceab8cf15f5a83f637ce1a6c3",
          "message": "Merge pull request #130 from czlonkowski/feature/validation-improvements\n\n## [2.10.3] - 2025-08-07\n\n### Fixed\n- **Validation System Robustness**: Fixed multiple critical validation issues affecting AI agents and workflow validation (fixes #58, #68, #70, #73)\n  - **Issue #73**: Fixed `validate_node_minimal` crash when config is undefined\n    - Added safe property access with optional chaining (`config?.resource`)\n    - Tool now handles undefined, null, and malformed configs gracefully\n  - **Issue #58**: Fixed `validate_node_operation` crash on invalid nodeType\n    - Added type checking before calling string methods\n    - Prevents \"Cannot read properties of undefined (reading 'replace')\" error\n  - **Issue #70**: Fixed validation profile settings being ignored\n    - Extended profile parameter to all validation phases (nodes, connections, expressions)\n    - Added Sticky Notes filtering to reduce false positives\n    - Enhanced cycle detection to allow legitimate loops (SplitInBatches)\n  - **Issue #68**: Added error recovery suggestions for AI agents\n    - New `addErrorRecoverySuggestions()` method provides actionable recovery steps\n    - Categorizes errors and suggests specific fixes for each type\n    - Helps AI agents self-correct when validation fails\n\n### Added\n- **Input Validation System**: Comprehensive validation for all MCP tool inputs\n  - Created `validation-schemas.ts` with custom validation utilities\n  - No external dependencies - pure TypeScript implementation\n  - Tool-specific validation schemas for all MCP tools\n  - Clear error messages with field-level details\n- **Enhanced Cycle Detection**: Improved detection of legitimate loops vs actual cycles\n  - Recognizes SplitInBatches loop patterns as valid\n  - Reduces false positive cycle warnings\n- **Comprehensive Test Suite**: Added 16 tests covering all validation fixes\n  - Tests for crash prevention with malformed inputs\n  - Tests for profile behavior across validation phases\n  - Tests for error recovery suggestions\n  - Tests for legitimate loop patterns\n\n### Enhanced\n- **Validation Profiles**: Now consistently applied across all validation phases\n  - `minimal`: Reduces warnings for basic validation\n  - `runtime`: Standard validation for production workflows\n  - `ai-friendly`: Optimized for AI agent workflow creation\n  - `strict`: Maximum validation for critical workflows\n- **Error Messages**: More helpful and actionable for both humans and AI agents\n  - Specific recovery suggestions for common errors\n  - Clear guidance on fixing validation issues\n  - Examples of correct configurations",
          "timestamp": "2025-08-07T21:42:40+02:00",
          "tree_id": "bb62b794c3d405348ba8abac311e8d0c3c69ee62",
          "url": "https://github.com/thorstone137/n8n-mcp/commit/640e758c2434183ceab8cf15f5a83f637ce1a6c3"
        },
        "date": 1754666210169,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0188,
            "unit": "ms",
            "range": 0.2514,
            "extra": "53088 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1371,
            "unit": "ms",
            "range": 0.6909999999999998,
            "extra": "319 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "unit": "ms",
            "range": 0.24720000000000003,
            "extra": "209861 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0673,
            "unit": "ms",
            "range": 0.346,
            "extra": "14856 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5825a85ccc504e36e16bad3437546bfdc1dd4fb5",
          "message": "Merge pull request #234 from czlonkowski/feat/telemetry-system-clean\n\nfeat: telemetry system refactor with enhanced privacy and reliability (v2.14.1)",
          "timestamp": "2025-09-26T19:36:19+02:00",
          "tree_id": "c76f224c253ab6de13fcc92d1774bf09518fe522",
          "url": "https://github.com/thorstone137/n8n-mcp/commit/5825a85ccc504e36e16bad3437546bfdc1dd4fb5"
        },
        "date": 1758985603176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0194,
            "range": "0.2149",
            "unit": "ms",
            "extra": "51634 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1751,
            "range": "0.4319000000000002",
            "unit": "ms",
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2602",
            "unit": "ms",
            "extra": "215557 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0655,
            "range": "0.2793",
            "unit": "ms",
            "extra": "15277 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1db133a50baa8c60d662e0ebf136776b45a0822",
          "message": "Merge pull request #241 from czlonkowski/feature/partial-update-enhancements\n\ntest: add 46 tests to improve workflow-diff-engine coverage to 89.51%",
          "timestamp": "2025-09-30T17:53:02+02:00",
          "tree_id": "94da5c8c1d270275efc0f035c38fa61d4c2498bf",
          "url": "https://github.com/thorstone137/n8n-mcp/commit/a1db133a50baa8c60d662e0ebf136776b45a0822"
        },
        "date": 1759259504107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.019,
            "range": "0.5814",
            "unit": "ms",
            "extra": "52580 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1208,
            "range": "0.8090000000000002",
            "unit": "ms",
            "extra": "320 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.3863",
            "unit": "ms",
            "extra": "217750 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0631,
            "range": "0.3569",
            "unit": "ms",
            "extra": "15853 ops/sec"
          }
        ]
      }
    ]
  }
}