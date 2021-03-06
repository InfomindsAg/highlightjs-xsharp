/*
Language: X# (xsharp)
Author: Patrick Kruselburger <pkruselburger@gmail.com>
Contributors: Volkmar Rigo <volkmar@rigo.bz>
Maintainer: Volkmar Rigo <volkmar@rigo.bz>
Description: Language definition for X# files
Website: https://www.xsharp.eu/help/index.html
*/

module.exports = function(hljs) {
  // keywords from https://www.xsharp.eu/help/keywords.html
  const NORMAL_KEYWORDS = ['ABSTRACT', 'ACCESS', 'ADD', 'ALIGN', 'ANSI', 'AS', 'ASCENDING', 'ASPEN', 'ASSEMBLY', 'ASSIGN', 'ASYNC', 'AUTO', 'AWAIT', 'BEGIN', 'BREAK', 'BY', 'CALLBACK', 'CASE', 'CATCH', 'CCALL', 'CCALLNATIVE', 'CHECKED', 'CLIPPER', 'CONST', 'CONSTRUCTOR', 'DECLARE', 'DEFAULT', 'DEFINE', 'DESCENDING', 'DESTRUCTOR', 'DIM', 'DLLEXPORT', 'DO', 'DOWNTO', 'ELSE', 'ELSEIF', 'END', 'ENDCASE', 'ENDDO', 'EN', 'ENDIF', 'EQUALS', 'EVENT', 'EXIT', 'EXPLICIT', 'EXPORT', 'EXTERN', 'FASTCALL', 'FIELD', 'FINALLY', 'FIXED', 'FOR', 'FOREACH', 'FROM', 'FUNC', 'FUNCTION', 'GET', 'GLOBAL', 'GROUP', 'HIDDEN', 'IF', 'IIF', 'IMPLEMENTS', 'IMPLICIT', 'IMPLIED', 'IN', 'INHERIT', 'INITONLY', 'INSTANCE', 'INTO', 'INTERNAL', 'IS', 'JOIN', 'LET', 'LOCAL', 'LOCK', 'LOOP', 'MEMBER', 'METHOD', 'MODULE', 'NAMEOF', 'NAMESPACE', 'NEW', 'NEXT', 'NIL', 'NOP', 'OFF', 'ON', 'OPERATOR', 'OPTIONS', 'ORDERBY', 'OTHERWISE', 'OVERRIDE', 'OUT', 'PARAMETERS', 'PARAMS', 'PARTIAL', 'PASCAL', 'PCALL', 'PCALLNATIVE', 'PCOUNT', 'POP', 'PRIVATE', 'PROC', 'PROCEDURE', 'PROPERTY', 'PROTECTED', 'PROTECT', 'PUBLIC', 'PUSH', 'RECOVER', 'REF', 'REMOVE', 'REPEAT', 'RETURN', 'SCOPE', 'SEALED', 'SELECT', 'SELF', 'SEQUENCE', 'SET', 'SHORTINT', 'SIZEOF', 'STATIC', 'STEP', 'STRICT', 'STRUCT', 'SUPER', 'SWITCH', 'THISCALL', 'TO', 'THROW', 'TRY', 'TYPEOF', 'UNCHECKED', 'UNICODE', 'UNSAFE', 'UNTIL', 'UPTO', 'USING', 'VALUE', 'VIRTUAL', 'VOLATILE', 'WARNINGS', '_WINCALL', 'WHEN', 'WHERE', 'WHILE', 'YIELD', '__ARGLIST', '_AND', '_CAST', '_CODEBLOCK', '_DLL', '_FIELD', '_GETFPARAM', '_GETMPARAM', '_INIT1, _INIT2, _INIT3', '_NOT', '_OR', '_SIZEOF', '_TYPEOF', '_XOR', '.AND.', '.NOT.', '.OR.', '.XOR.', '...', '#command', '#define', '#else', '#endif', '#endregion', '#ifdef', '#ifndef', '#include', '#line', '#pragma', '#region', '#translate', '#undef', '#using', '#warning', '#xcommand', '#xtranslate', 'MEMVAR', 'VAR', 'CLASS', 'DELEGATE', 'ENUM', 'INTERFACE', 'STRUCTURE', 'UNION', 'VOSTRUCT'];

  const TYPES = [
    /* Simple types */ 'BYTE', 'CHAR', 'DWORD', 'DECIMAL', 'DYNAMIC', 'INT', 'INT64', 'LOGIC', 'LONGINT', 'OBJECT', 'PTR', 'REAL4', 'REAL8', 'SBYTE', 'SHORT', 'STRING', 'UINT64', 'VOID', 'WORD',
    /* xBase specific types */ 'ARRAY', 'BINARY', 'CODEBLOCK', 'CURRENCY', 'DATE', 'FLOAT', 'PSZ', 'SYMBOL', 'USUAL'
    /* User defined types are handled separately */
  ];

  const LITERALS = [
    /* Logic literals */ 'TRUE', '.T.', '.Y.', 'FALSE', '.F.', '.N.',
    /* Null literals */ 'NULL', 'NULL_ARRAY', 'NULL_CODEBLOCK', 'NULL_DATE', 'NULL_OBJECT', 'NULL_PSZ', 'NULL_PTR', 'NULL_STRING', 'NULL_SYMBOL', '.NULL.',
    /* Integer literals */ 'L', 'l', 'U', 'u',
    /* Float literals */ '$', 'S', 's', 'D', 'd', 'M', 'm',
    /* Compiler macros */ '__ARRAYBASE__', '__CLR2__', '__CLR4__', '__CLRVERSION__', '__DATE__', '__DATETIME__', '__DIALECT__', '__DIALECT_CORE__', '__DIALECT_FOXPRO__', '__DIALECT_HARBOUR__', '__DIALECT_VO__', '__DIALECT_VULCAN__', '__DIALECT_XBASEPP__', '__DEBUG__', '__ENTITY__', '__FILE__', '__FOX1__, __FOX2__', '__FUNCTION__', '__FUNCTIONS__', '__HARBOUR__', '__LINE__', '__MODULE__', '__SIG__', '__SRCLOC__', '__SYSDIR__', '__TIME__', '__UTCTIME__', '__VERSION__', '__VO__', '__VO1__', '__VO2__', '__VO3__', '__VO4__', '__VO5__', '__VO6__', '__VO7__', '__VO8__', '__VO9__', '__VO10__', '__VO11__', '__VO12__', '__VO13__', '__VO14__', '__VO15__', '__VO16__', '__VULCAN__', '__WINDIR__', '__WINDRIVE__', '__XPP__', '__XPP1__', '__XSHARP__', '__XSHARP_RT__'
  ];

  const STRINGS = {
    scope: 'string',
    variants: [
      {
        begin: '"',
        end: '"',
        relevance: 0
      },
      {
        begin: '\'',
        end: '\'',
        relevance: 0
      }
    ]
  };

  const KEYWORDS = {
    keyword: NORMAL_KEYWORDS,
    type: TYPES,
    literal: LITERALS
  };

  return {
    name: "xsharp",
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      STRINGS,
      {
        // Preprocessor directives and symbol literals
        scope: 'meta string',
        begin: /\B#\w+\b/
      },
      hljs.COMMENT('//', '$', {
        contains: [
          {
            scope: 'doc',
            begin: /\\\n/
          }
        ]
      }),
      hljs.COMMENT(
        '/\\*', // begin
        '\\*/', // end
        {
          contains: [
            {
              scope: 'doc', begin: '@\\w+'
            }
          ]
        }
      ),
      {
        // user defined types
        match: [
          /\b(CLASS|DELEGATE|ENUM|INTERFACE|STRUCTURE|UNION|VOSTRUCT)/,
          /[^\S\r\n]/,
          /\w+/
        ],
        scope: {
          1: 'keyword',
          3: 'title.class'
        }
      },
      {
        // functions, methods
        match: [
          /\b(FUNC|FUNCTION|METHOD|PROC|PROCEDURE)/,
          /[^\S\r\n]/,
          /\w+/
        ],
        scope: {
          1: 'keyword',
          3: 'title.function'
        }
      }
    ]
  };
};
