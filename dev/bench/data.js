window.BENCHMARK_DATA = {
  "lastUpdate": 1792968064942,
  "repoUrl": "https://github.com/phagenlocher/dhall-haskell",
  "entries": {
    "dhall": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bef78111f224152d80df193ec2d620965050334",
          "message": "Bump renovatebot/github-action from 46.3.7 to 46.3.8 (#2874)\n\nBumps [renovatebot/github-action](https://github.com/renovatebot/github-action) from 46.3.7 to 46.3.8.\n- [Release notes](https://github.com/renovatebot/github-action/releases)\n- [Changelog](https://github.com/renovatebot/github-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/renovatebot/github-action/compare/v46.3.7...v46.3.8)\n\n---\nupdated-dependencies:\n- dependency-name: renovatebot/github-action\n  dependency-version: 46.3.8\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Sergei Winitzki <winitzki@users.noreply.github.com>",
          "timestamp": "2026-10-22T16:48:05Z",
          "tree_id": "ce8790ab573cc4f72586d510d1c7a437568e3f4d",
          "url": "https://github.com/phagenlocher/dhall-haskell/commit/5bef78111f224152d80df193ec2d620965050334"
        },
        "date": 1792968064388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Prelude.issue 412",
            "value": 0.052971575,
            "range": "0.00368426",
            "unit": "ms",
            "extra": "2*Stdev = 0.00368426 ms"
          },
          {
            "name": "Prelude.union performance",
            "value": 0.053725466,
            "range": "0.00266478",
            "unit": "ms",
            "extra": "2*Stdev = 0.00266478 ms"
          },
          {
            "name": "normalize.ChurchEval.typecheck",
            "value": 0.033047699,
            "range": "0.00319602",
            "unit": "ms",
            "extra": "2*Stdev = 0.00319602 ms"
          },
          {
            "name": "normalize.ChurchEval.evaluation",
            "value": 391.906334,
            "range": "20.7451",
            "unit": "ms",
            "extra": "2*Stdev = 20.7451 ms"
          },
          {
            "name": "normalize.FunCompose.typecheck",
            "value": 0.017444683,
            "range": "0.00137502",
            "unit": "ms",
            "extra": "2*Stdev = 0.00137502 ms"
          },
          {
            "name": "normalize.FunCompose.evaluation",
            "value": 300.016998,
            "range": "14.3392",
            "unit": "ms",
            "extra": "2*Stdev = 14.3392 ms"
          },
          {
            "name": "normalize.Iterate.typecheck",
            "value": 0.045734259,
            "range": "0.00312426",
            "unit": "ms",
            "extra": "2*Stdev = 0.00312426 ms"
          },
          {
            "name": "normalize.Iterate.evaluation",
            "value": 85.9825182,
            "range": "2.83535",
            "unit": "ms",
            "extra": "2*Stdev = 2.83535 ms"
          },
          {
            "name": "normalize.IterateAlt.typecheck",
            "value": 0.020330337,
            "range": "0.00142321",
            "unit": "ms",
            "extra": "2*Stdev = 0.00142321 ms"
          },
          {
            "name": "normalize.IterateAlt.evaluation",
            "value": 264.191191,
            "range": "5.99077",
            "unit": "ms",
            "extra": "2*Stdev = 5.99077 ms"
          },
          {
            "name": "normalize.IterateAlt2.typecheck",
            "value": 0.017541953,
            "range": "0.00175208",
            "unit": "ms",
            "extra": "2*Stdev = 0.00175208 ms"
          },
          {
            "name": "normalize.IterateAlt2.evaluation",
            "value": 211.1694474,
            "range": "12.5805",
            "unit": "ms",
            "extra": "2*Stdev = 12.5805 ms"
          },
          {
            "name": "normalize.ListBench.typecheck",
            "value": 0.054567548,
            "range": "0.00324452",
            "unit": "ms",
            "extra": "2*Stdev = 0.00324452 ms"
          },
          {
            "name": "normalize.ListBench.evaluation",
            "value": 189.9762602,
            "range": "9.15181",
            "unit": "ms",
            "extra": "2*Stdev = 9.15181 ms"
          },
          {
            "name": "normalize.ListBenchAlt.typecheck",
            "value": 0.048521491,
            "range": "0.00399569",
            "unit": "ms",
            "extra": "2*Stdev = 0.00399569 ms"
          },
          {
            "name": "normalize.ListBenchAlt.evaluation",
            "value": 241.2154358,
            "range": "8.53231",
            "unit": "ms",
            "extra": "2*Stdev = 8.53231 ms"
          },
          {
            "name": "normalize.NaturalFoldShortcut.typecheck",
            "value": 0.000514257,
            "range": "4.7146e-05",
            "unit": "ms",
            "extra": "2*Stdev = 4.7146e-05 ms"
          },
          {
            "name": "normalize.NaturalFoldShortcut.evaluation",
            "value": 0.011036283,
            "range": "0.000598542",
            "unit": "ms",
            "extra": "2*Stdev = 0.000598542 ms"
          },
          {
            "name": "large1.parse",
            "value": 174.794802,
            "range": "7.35537",
            "unit": "ms",
            "extra": "2*Stdev = 7.35537 ms"
          },
          {
            "name": "large1.resolve",
            "value": 62.9135226,
            "range": "5.85436",
            "unit": "ms",
            "extra": "2*Stdev = 5.85436 ms"
          },
          {
            "name": "large1.typecheck",
            "value": 73.3525854,
            "range": "2.73933",
            "unit": "ms",
            "extra": "2*Stdev = 2.73933 ms"
          },
          {
            "name": "large1.evaluation",
            "value": 144.6363568,
            "range": "8.57441",
            "unit": "ms",
            "extra": "2*Stdev = 8.57441 ms"
          },
          {
            "name": "large2.normalize",
            "value": 169.9033148,
            "range": "6.45732",
            "unit": "ms",
            "extra": "2*Stdev = 6.45732 ms"
          },
          {
            "name": "large2.cbor.encode",
            "value": 345.9226612,
            "range": "18.5611",
            "unit": "ms",
            "extra": "2*Stdev = 18.5611 ms"
          },
          {
            "name": "large2.cbor.decode",
            "value": 853.6224192,
            "range": "26.3846",
            "unit": "ms",
            "extra": "2*Stdev = 26.3846 ms"
          },
          {
            "name": "k8s.file3.resolve",
            "value": 2475.25956225,
            "range": "131.752",
            "unit": "ms",
            "extra": "2*Stdev = 131.752 ms"
          },
          {
            "name": "k8s.file3.typecheck",
            "value": 406.7969212,
            "range": "13.4146",
            "unit": "ms",
            "extra": "2*Stdev = 13.4146 ms"
          },
          {
            "name": "k8s.file3.evaluation",
            "value": 0.689246384,
            "range": "0.0506996",
            "unit": "ms",
            "extra": "2*Stdev = 0.0506996 ms"
          },
          {
            "name": "k8s.file4.resolve",
            "value": 1605.8821762,
            "range": "5.22039",
            "unit": "ms",
            "extra": "2*Stdev = 5.22039 ms"
          },
          {
            "name": "k8s.file4.typecheck",
            "value": 95.2043498,
            "range": "8.59134",
            "unit": "ms",
            "extra": "2*Stdev = 8.59134 ms"
          },
          {
            "name": "k8s.file4.evaluation",
            "value": 0.411564456,
            "range": "0.0354843",
            "unit": "ms",
            "extra": "2*Stdev = 0.0354843 ms"
          },
          {
            "name": "large3.resolve",
            "value": 2463.8266111,
            "range": "103.013",
            "unit": "ms",
            "extra": "2*Stdev = 103.013 ms"
          },
          {
            "name": "large3.typecheck",
            "value": 5185.7796286,
            "range": "238.485",
            "unit": "ms",
            "extra": "2*Stdev = 238.485 ms"
          },
          {
            "name": "large3.evaluation",
            "value": 722.7917514,
            "range": "56.762",
            "unit": "ms",
            "extra": "2*Stdev = 56.762 ms"
          },
          {
            "name": "large3.get_config.resolve",
            "value": 2503.56936465,
            "range": "144.279",
            "unit": "ms",
            "extra": "2*Stdev = 144.279 ms"
          },
          {
            "name": "large3.get_config.typecheck",
            "value": 5336.320221,
            "range": "10.4762",
            "unit": "ms",
            "extra": "2*Stdev = 10.4762 ms"
          },
          {
            "name": "large3.get_config.evaluation",
            "value": 0.264303785,
            "range": "0.0110128",
            "unit": "ms",
            "extra": "2*Stdev = 0.0110128 ms"
          },
          {
            "name": "large4.resolve",
            "value": 315.7105246,
            "range": "3.83761",
            "unit": "ms",
            "extra": "2*Stdev = 3.83761 ms"
          },
          {
            "name": "large4.typecheck",
            "value": 434.456886,
            "range": "9.4378",
            "unit": "ms",
            "extra": "2*Stdev = 9.4378 ms"
          },
          {
            "name": "large4.evaluation",
            "value": 1.92336458,
            "range": "0.0182821",
            "unit": "ms",
            "extra": "2*Stdev = 0.0182821 ms"
          },
          {
            "name": "large5.resolve",
            "value": 137.0651338,
            "range": "4.81475",
            "unit": "ms",
            "extra": "2*Stdev = 4.81475 ms"
          },
          {
            "name": "large5.typecheck",
            "value": 69.6962086,
            "range": "6.50859",
            "unit": "ms",
            "extra": "2*Stdev = 6.50859 ms"
          },
          {
            "name": "large5.evaluation",
            "value": 74.1249112,
            "range": "6.39217",
            "unit": "ms",
            "extra": "2*Stdev = 6.39217 ms"
          },
          {
            "name": "large6.slow_parse.resolve",
            "value": 845.3969484,
            "range": "15.511",
            "unit": "ms",
            "extra": "2*Stdev = 15.511 ms"
          },
          {
            "name": "large6.slow_parse.typecheck",
            "value": 0.000220298,
            "range": "2.0562e-05",
            "unit": "ms",
            "extra": "2*Stdev = 2.0562e-05 ms"
          },
          {
            "name": "large6.slow_parse.evaluation",
            "value": 0.000208848,
            "range": "1.243e-05",
            "unit": "ms",
            "extra": "2*Stdev = 1.243e-05 ms"
          },
          {
            "name": "large6.slow_walk.resolve",
            "value": 440.6945766,
            "range": "4.57668",
            "unit": "ms",
            "extra": "2*Stdev = 4.57668 ms"
          },
          {
            "name": "large6.slow_walk.typecheck",
            "value": 1.237375637,
            "range": "0.0760034",
            "unit": "ms",
            "extra": "2*Stdev = 0.0760034 ms"
          },
          {
            "name": "large6.slow_walk.evaluation",
            "value": 2.365076412,
            "range": "0.221072",
            "unit": "ms",
            "extra": "2*Stdev = 0.221072 ms"
          },
          {
            "name": "large6.slow_eval.resolve_cold_cache_on",
            "value": 1.446984243,
            "range": "0.121747",
            "unit": "ms",
            "extra": "2*Stdev = 0.121747 ms"
          },
          {
            "name": "large6.slow_typecheck.resolve_cold_cache_on",
            "value": 559.6317334,
            "range": "2.96616",
            "unit": "ms",
            "extra": "2*Stdev = 2.96616 ms"
          },
          {
            "name": "large6.slow_normalize.resolve_cold_cache_on",
            "value": 450.3367646,
            "range": "12.9782",
            "unit": "ms",
            "extra": "2*Stdev = 12.9782 ms"
          },
          {
            "name": "large6.slow_multi.resolve_cold_cache_on",
            "value": 366.5655778,
            "range": "8.29165",
            "unit": "ms",
            "extra": "2*Stdev = 8.29165 ms"
          },
          {
            "name": "prelude_import.resolve_cold_cache_on",
            "value": 366.9930618,
            "range": "4.23653",
            "unit": "ms",
            "extra": "2*Stdev = 4.23653 ms"
          },
          {
            "name": "diamond_import.end_to_end_cold",
            "value": 457.9262196,
            "range": "17.2978",
            "unit": "ms",
            "extra": "2*Stdev = 17.2978 ms"
          },
          {
            "name": "diamond_import_transitive.end_to_end_cold",
            "value": 468.0152,
            "range": "29.8174",
            "unit": "ms",
            "extra": "2*Stdev = 29.8174 ms"
          },
          {
            "name": "substitutions.resolve_cold_cache_on",
            "value": 193.180985,
            "range": "3.03856",
            "unit": "ms",
            "extra": "2*Stdev = 3.03856 ms"
          },
          {
            "name": "substitutions.many_files.resolve_cold_cache_on",
            "value": 85.8495602,
            "range": "1.90799",
            "unit": "ms",
            "extra": "2*Stdev = 1.90799 ms"
          },
          {
            "name": "substitutions.composer_proxy.end_to_end_cold",
            "value": 956.8252786,
            "range": "15.3076",
            "unit": "ms",
            "extra": "2*Stdev = 15.3076 ms"
          },
          {
            "name": "substitutions.composer_proxy.many_imports.cold",
            "value": 389.5900866,
            "range": "17.2005",
            "unit": "ms",
            "extra": "2*Stdev = 17.2005 ms"
          },
          {
            "name": "substitutions.composer_proxy.many_imports.warm",
            "value": 193.7036816,
            "range": "4.66129",
            "unit": "ms",
            "extra": "2*Stdev = 4.66129 ms"
          },
          {
            "name": "substitutions.shift_cost.naive",
            "value": 22.83354725,
            "range": "1.03294",
            "unit": "ms",
            "extra": "2*Stdev = 1.03294 ms"
          },
          {
            "name": "substitutions.shift_cost.optimized",
            "value": 1.874863412,
            "range": "0.17534",
            "unit": "ms",
            "extra": "2*Stdev = 0.17534 ms"
          },
          {
            "name": "import_overhead.custom_normalizer.cold.default",
            "value": 105.9035573,
            "range": "2.95645",
            "unit": "ms",
            "extra": "2*Stdev = 2.95645 ms"
          },
          {
            "name": "import_overhead.custom_normalizer.cold.custom",
            "value": 116.709554275,
            "range": "10.9911",
            "unit": "ms",
            "extra": "2*Stdev = 10.9911 ms"
          },
          {
            "name": "import_overhead.custom_normalizer.warm.default",
            "value": 121.6445993,
            "range": "3.09749",
            "unit": "ms",
            "extra": "2*Stdev = 3.09749 ms"
          },
          {
            "name": "import_overhead.custom_normalizer.warm.custom",
            "value": 109.6230376,
            "range": "10.0903",
            "unit": "ms",
            "extra": "2*Stdev = 10.0903 ms"
          },
          {
            "name": "import_overhead.import_alt.cold",
            "value": 55.5502772,
            "range": "3.15308",
            "unit": "ms",
            "extra": "2*Stdev = 3.15308 ms"
          },
          {
            "name": "import_overhead.import_alt.warm",
            "value": 56.911201,
            "range": "4.27769",
            "unit": "ms",
            "extra": "2*Stdev = 4.27769 ms"
          },
          {
            "name": "import_overhead.import_alt.typecheck",
            "value": 0.018026912,
            "range": "0.00159282",
            "unit": "ms",
            "extra": "2*Stdev = 0.00159282 ms"
          },
          {
            "name": "import_overhead.root_substitutions.resolve",
            "value": 0.336397254,
            "range": "0.0212838",
            "unit": "ms",
            "extra": "2*Stdev = 0.0212838 ms"
          },
          {
            "name": "import_overhead.starting_context.cold",
            "value": 51.30855815,
            "range": "2.44395",
            "unit": "ms",
            "extra": "2*Stdev = 2.44395 ms"
          },
          {
            "name": "import_overhead.starting_context.warm",
            "value": 51.6933171,
            "range": "2.3749",
            "unit": "ms",
            "extra": "2*Stdev = 2.3749 ms"
          },
          {
            "name": "import_overhead.projection.end_to_end_cold",
            "value": 103.7316636,
            "range": "6.44428",
            "unit": "ms",
            "extra": "2*Stdev = 6.44428 ms"
          },
          {
            "name": "import_overhead.force_all.end_to_end_cold",
            "value": 104.9694454,
            "range": "7.30652",
            "unit": "ms",
            "extra": "2*Stdev = 7.30652 ms"
          },
          {
            "name": "semisemantic.nf_size_walk.full",
            "value": 48.1079834,
            "range": "2.77326",
            "unit": "ms",
            "extra": "2*Stdev = 2.77326 ms"
          },
          {
            "name": "semisemantic.nf_size_walk.early_abort",
            "value": 1.4689236,
            "range": "0.0842154",
            "unit": "ms",
            "extra": "2*Stdev = 0.0842154 ms"
          },
          {
            "name": "Issue #108.Text",
            "value": 6.7362459,
            "range": "0.460957",
            "unit": "ms",
            "extra": "2*Stdev = 0.460957 ms"
          },
          {
            "name": "Issue #108.Binary",
            "value": 0.143105782,
            "range": "0.0119712",
            "unit": "ms",
            "extra": "2*Stdev = 0.0119712 ms"
          },
          {
            "name": "Kubernetes/Binary",
            "value": 303.5857957,
            "range": "2.68936",
            "unit": "ms",
            "extra": "2*Stdev = 2.68936 ms"
          },
          {
            "name": "Deeply nested parentheses",
            "value": 14.643629375,
            "range": "1.34688",
            "unit": "ms",
            "extra": "2*Stdev = 1.34688 ms"
          },
          {
            "name": "Deeply nested brackets",
            "value": 14.054662375,
            "range": "1.13749",
            "unit": "ms",
            "extra": "2*Stdev = 1.13749 ms"
          },
          {
            "name": "Long variable names",
            "value": 30.8417054,
            "range": "3.0293",
            "unit": "ms",
            "extra": "2*Stdev = 3.0293 ms"
          },
          {
            "name": "Large number of function arguments",
            "value": 41.5781717,
            "range": "2.08558",
            "unit": "ms",
            "extra": "2*Stdev = 2.08558 ms"
          },
          {
            "name": "Long double-quoted strings (10M chars)",
            "value": 218.528614,
            "range": "11.9127",
            "unit": "ms",
            "extra": "2*Stdev = 11.9127 ms"
          },
          {
            "name": "Long single-quoted strings (10M chars)",
            "value": 206.0450638,
            "range": "13.8846",
            "unit": "ms",
            "extra": "2*Stdev = 13.8846 ms"
          },
          {
            "name": "Large natural number literal (10M digits)",
            "value": 200.130262,
            "range": "14.5916",
            "unit": "ms",
            "extra": "2*Stdev = 14.5916 ms"
          },
          {
            "name": "Large hex number literal (10M digits)",
            "value": 230.18308165,
            "range": "12.1571",
            "unit": "ms",
            "extra": "2*Stdev = 12.1571 ms"
          },
          {
            "name": "Large binary number literal (10M digits)",
            "value": 205.6668924,
            "range": "18.2004",
            "unit": "ms",
            "extra": "2*Stdev = 18.2004 ms"
          },
          {
            "name": "Large natural number literal (10M digits, forced)",
            "value": 1642.3777962,
            "range": "25.5026",
            "unit": "ms",
            "extra": "2*Stdev = 25.5026 ms"
          },
          {
            "name": "Large hex number literal (10M digits, forced)",
            "value": 384.6597472,
            "range": "14.8109",
            "unit": "ms",
            "extra": "2*Stdev = 14.8109 ms"
          },
          {
            "name": "Large binary number literal (10M digits, forced)",
            "value": 283.7013578,
            "range": "3.92141",
            "unit": "ms",
            "extra": "2*Stdev = 3.92141 ms"
          },
          {
            "name": "Whitespace",
            "value": 21.0194111,
            "range": "2.05727",
            "unit": "ms",
            "extra": "2*Stdev = 2.05727 ms"
          },
          {
            "name": "Line comment",
            "value": 436.4493322,
            "range": "22.5762",
            "unit": "ms",
            "extra": "2*Stdev = 22.5762 ms"
          },
          {
            "name": "Block comment",
            "value": 314.8247026,
            "range": "5.83331",
            "unit": "ms",
            "extra": "2*Stdev = 5.83331 ms"
          },
          {
            "name": "CPkg.parse",
            "value": 1287.8062294,
            "range": "21.059",
            "unit": "ms",
            "extra": "2*Stdev = 21.059 ms"
          },
          {
            "name": "CPkg.Text",
            "value": 1350.7942552,
            "range": "52.2456",
            "unit": "ms",
            "extra": "2*Stdev = 52.2456 ms"
          }
        ]
      }
    ]
  }
}