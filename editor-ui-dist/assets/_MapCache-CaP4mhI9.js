import { t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { C as computed, Dt as getCurrentScope, En as init_dist, Et as effectScope, F as getCurrentInstance, Ft as readonly, G as nextTick, Gt as unref, Ht as toRefs$1, It as ref, L as h, M as createVNode, Nt as onScopeDispose, P as defineComponent, Pt as reactive, Q as onUnmounted, Tn as global, Tt as customRef, Vt as toRef$1, Z as onMounted, _ as Fragment, _t as watch, jt as isRef, nt as provide, vt as watchEffect, x as Text, z as inject, zt as shallowRef } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
init_dist();
/*!
* shared v11.1.10
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
function warn(msg, err) {
	if (typeof console !== "undefined") {
		console.warn(`[intlify] ` + msg);
		/* istanbul ignore if */
		if (err) console.warn(err.stack);
	}
}
var inBrowser = typeof window !== "undefined";
var makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
var generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({
	l: locale,
	k: key,
	s: source
});
var friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
var isNumber = (val) => typeof val === "number" && isFinite(val);
var isDate = (val) => toTypeString(val) === "[object Date]";
var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
var isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
var assign = Object.assign;
var _create = Object.create;
var create = (obj = null) => _create(obj);
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : create());
};
function escapeHtml(rawText) {
	return rawText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function escapeAttributeValue(value) {
	return value.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sanitizeTranslatedHtml(html) {
	html = html.replace(/(\w+)\s*=\s*"([^"]*)"/g, (_, attrName, attrValue) => `${attrName}="${escapeAttributeValue(attrValue)}"`);
	html = html.replace(/(\w+)\s*=\s*'([^']*)'/g, (_, attrName, attrValue) => `${attrName}='${escapeAttributeValue(attrValue)}'`);
	if (/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(html)) html = html.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3");
	[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((pattern) => {
		html = html.replace(pattern, "$1javascript&#58;");
	});
	return html;
}
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function hasOwn$1(obj, key) {
	return hasOwnProperty$4.call(obj, key);
}
var isArray$1 = Array.isArray;
var isFunction$2 = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isBoolean = (val) => typeof val === "boolean";
var isObject$4 = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return isObject$4(val) && isFunction$2(val.then) && isFunction$2(val.catch);
};
var objectToString$2 = Object.prototype.toString;
var toTypeString = (value) => objectToString$2.call(value);
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var toDisplayString = (val) => {
	return val == null ? "" : isArray$1(val) || isPlainObject(val) && val.toString === objectToString$2 ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
	return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
var isNotObjectOrIsArray = (val) => !isObject$4(val) || isArray$1(val);
function deepCopy(src, des) {
	if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) throw new Error("Invalid value");
	const stack = [{
		src,
		des
	}];
	while (stack.length) {
		const { src: src$1, des: des$1 } = stack.pop();
		Object.keys(src$1).forEach((key) => {
			if (key === "__proto__") return;
			if (isObject$4(src$1[key]) && !isObject$4(des$1[key])) des$1[key] = Array.isArray(src$1[key]) ? [] : create();
			if (isNotObjectOrIsArray(des$1[key]) || isNotObjectOrIsArray(src$1[key])) des$1[key] = src$1[key];
			else stack.push({
				src: src$1[key],
				des: des$1[key]
			});
		});
	}
}
function createPosition(line, column, offset) {
	return {
		line,
		column,
		offset
	};
}
function createLocation(start, end, source) {
	const loc = {
		start,
		end
	};
	if (source != null) loc.source = source;
	return loc;
}
var CompileErrorCodes = {
	EXPECTED_TOKEN: 1,
	INVALID_TOKEN_IN_PLACEHOLDER: 2,
	UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
	UNKNOWN_ESCAPE_SEQUENCE: 4,
	INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
	UNBALANCED_CLOSING_BRACE: 6,
	UNTERMINATED_CLOSING_BRACE: 7,
	EMPTY_PLACEHOLDER: 8,
	NOT_ALLOW_NEST_PLACEHOLDER: 9,
	INVALID_LINKED_FORMAT: 10,
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14,
	UNHANDLED_CODEGEN_NODE_TYPE: 15,
	UNHANDLED_MINIFIER_NODE_TYPE: 16
};
CompileErrorCodes.EXPECTED_TOKEN, CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, CompileErrorCodes.UNBALANCED_CLOSING_BRACE, CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, CompileErrorCodes.EMPTY_PLACEHOLDER, CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, CompileErrorCodes.INVALID_LINKED_FORMAT, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE;
function createCompileError(code, loc, options = {}) {
	const { domain, messages, args } = options;
	const msg = code;
	const error$1 = new SyntaxError(String(msg));
	error$1.code = code;
	if (loc) error$1.location = loc;
	error$1.domain = domain;
	return error$1;
}
function defaultOnError(error$1) {
	throw error$1;
}
var CHAR_SP = " ";
var CHAR_CR = "\r";
var CHAR_LF = "\n";
var CHAR_LS = String.fromCharCode(8232);
var CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
	const _buf = str;
	let _index = 0;
	let _line = 1;
	let _column = 1;
	let _peekOffset = 0;
	const isCRLF = (index$1) => _buf[index$1] === CHAR_CR && _buf[index$1 + 1] === CHAR_LF;
	const isLF = (index$1) => _buf[index$1] === CHAR_LF;
	const isPS = (index$1) => _buf[index$1] === CHAR_PS;
	const isLS = (index$1) => _buf[index$1] === CHAR_LS;
	const isLineEnd = (index$1) => isCRLF(index$1) || isLF(index$1) || isPS(index$1) || isLS(index$1);
	const index = () => _index;
	const line = () => _line;
	const column = () => _column;
	const peekOffset = () => _peekOffset;
	const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
	const currentChar = () => charAt(_index);
	const currentPeek = () => charAt(_index + _peekOffset);
	function next() {
		_peekOffset = 0;
		if (isLineEnd(_index)) {
			_line++;
			_column = 0;
		}
		if (isCRLF(_index)) _index++;
		_index++;
		_column++;
		return _buf[_index];
	}
	function peek() {
		if (isCRLF(_index + _peekOffset)) _peekOffset++;
		_peekOffset++;
		return _buf[_index + _peekOffset];
	}
	function reset() {
		_index = 0;
		_line = 1;
		_column = 1;
		_peekOffset = 0;
	}
	function resetPeek(offset = 0) {
		_peekOffset = offset;
	}
	function skipToPeek() {
		const target = _index + _peekOffset;
		while (target !== _index) next();
		_peekOffset = 0;
	}
	return {
		index,
		line,
		column,
		peekOffset,
		charAt,
		currentChar,
		currentPeek,
		next,
		peek,
		reset,
		resetPeek,
		skipToPeek
	};
}
var EOF = void 0;
var DOT = ".";
var LITERAL_DELIMITER = "'";
var ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
	const location = options.location !== false;
	const _scnr = createScanner(source);
	const currentOffset = () => _scnr.index();
	const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
	const _initLoc = currentPosition();
	const _initOffset = currentOffset();
	const _context = {
		currentType: 13,
		offset: _initOffset,
		startLoc: _initLoc,
		endLoc: _initLoc,
		lastType: 13,
		lastOffset: _initOffset,
		lastStartLoc: _initLoc,
		lastEndLoc: _initLoc,
		braceNest: 0,
		inLinked: false,
		text: ""
	};
	const context = () => _context;
	const { onError } = options;
	function emitError(code, pos, offset, ...args) {
		const ctx = context();
		pos.column += offset;
		pos.offset += offset;
		if (onError) onError(createCompileError(code, location ? createLocation(ctx.startLoc, pos) : null, {
			domain: ERROR_DOMAIN$3,
			args
		}));
	}
	function getToken(context$1, type, value) {
		context$1.endLoc = currentPosition();
		context$1.currentType = type;
		const token = { type };
		if (location) token.loc = createLocation(context$1.startLoc, context$1.endLoc);
		if (value != null) token.value = value;
		return token;
	}
	const getEndToken = (context$1) => getToken(context$1, 13);
	function eat(scnr, ch) {
		if (scnr.currentChar() === ch) {
			scnr.next();
			return ch;
		} else {
			emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
			return "";
		}
	}
	function peekSpaces(scnr) {
		let buf = "";
		while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
			buf += scnr.currentPeek();
			scnr.peek();
		}
		return buf;
	}
	function skipSpaces(scnr) {
		const buf = peekSpaces(scnr);
		scnr.skipToPeek();
		return buf;
	}
	function isIdentifierStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc === 95;
	}
	function isNumberStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function isNamedIdentifierStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isListIdentifierStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isNumberStart(scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLiteralStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === LITERAL_DELIMITER;
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDotStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 7) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ".";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedModifierStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 8) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDelimiterStart(scnr, context$1) {
		const { currentType } = context$1;
		if (!(currentType === 7 || currentType === 11)) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ":";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedReferStart(scnr, context$1) {
		const { currentType } = context$1;
		if (currentType !== 9) return false;
		const fn = () => {
			const ch = scnr.currentPeek();
			if (ch === "{") return isIdentifierStart(scnr.peek());
			else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) return false;
			else if (ch === CHAR_LF) {
				scnr.peek();
				return fn();
			} else return isTextStart(scnr, false);
		};
		const ret = fn();
		scnr.resetPeek();
		return ret;
	}
	function isPluralStart(scnr) {
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === "|";
		scnr.resetPeek();
		return ret;
	}
	function isTextStart(scnr, reset = true) {
		const fn = (hasSpace = false, prev = "") => {
			const ch = scnr.currentPeek();
			if (ch === "{") return hasSpace;
			else if (ch === "@" || !ch) return hasSpace;
			else if (ch === "|") return !(prev === CHAR_SP || prev === CHAR_LF);
			else if (ch === CHAR_SP) {
				scnr.peek();
				return fn(true, CHAR_SP);
			} else if (ch === CHAR_LF) {
				scnr.peek();
				return fn(true, CHAR_LF);
			} else return true;
		};
		const ret = fn();
		reset && scnr.resetPeek();
		return ret;
	}
	function takeChar(scnr, fn) {
		const ch = scnr.currentChar();
		if (ch === EOF) return EOF;
		if (fn(ch)) {
			scnr.next();
			return ch;
		}
		return null;
	}
	function isIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36;
	}
	function takeIdentifierChar(scnr) {
		return takeChar(scnr, isIdentifier);
	}
	function isNamedIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36 || cc === 45;
	}
	function takeNamedIdentifierChar(scnr) {
		return takeChar(scnr, isNamedIdentifier);
	}
	function isDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function takeDigit(scnr) {
		return takeChar(scnr, isDigit);
	}
	function isHexDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57 || cc >= 65 && cc <= 70 || cc >= 97 && cc <= 102;
	}
	function takeHexDigit(scnr) {
		return takeChar(scnr, isHexDigit);
	}
	function getDigits(scnr) {
		let ch = "";
		let num = "";
		while (ch = takeDigit(scnr)) num += ch;
		return num;
	}
	function readText(scnr) {
		let buf = "";
		while (true) {
			const ch = scnr.currentChar();
			if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) break;
			else if (ch === CHAR_SP || ch === CHAR_LF) if (isTextStart(scnr)) {
				buf += ch;
				scnr.next();
			} else if (isPluralStart(scnr)) break;
			else {
				buf += ch;
				scnr.next();
			}
			else {
				buf += ch;
				scnr.next();
			}
		}
		return buf;
	}
	function readNamedIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let name = "";
		while (ch = takeNamedIdentifierChar(scnr)) name += ch;
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return name;
	}
	function readListIdentifier(scnr) {
		skipSpaces(scnr);
		let value = "";
		if (scnr.currentChar() === "-") {
			scnr.next();
			value += `-${getDigits(scnr)}`;
		} else value += getDigits(scnr);
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return value;
	}
	function isLiteral$1(ch) {
		return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
	}
	function readLiteral(scnr) {
		skipSpaces(scnr);
		eat(scnr, `\'`);
		let ch = "";
		let literal = "";
		while (ch = takeChar(scnr, isLiteral$1)) if (ch === "\\") literal += readEscapeSequence(scnr);
		else literal += ch;
		const current = scnr.currentChar();
		if (current === CHAR_LF || current === EOF) {
			emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
			if (current === CHAR_LF) {
				scnr.next();
				eat(scnr, `\'`);
			}
			return literal;
		}
		eat(scnr, `\'`);
		return literal;
	}
	function readEscapeSequence(scnr) {
		const ch = scnr.currentChar();
		switch (ch) {
			case "\\":
			case `\'`:
				scnr.next();
				return `\\${ch}`;
			case "u": return readUnicodeEscapeSequence(scnr, ch, 4);
			case "U": return readUnicodeEscapeSequence(scnr, ch, 6);
			default:
				emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
				return "";
		}
	}
	function readUnicodeEscapeSequence(scnr, unicode, digits) {
		eat(scnr, unicode);
		let sequence = "";
		for (let i = 0; i < digits; i++) {
			const ch = takeHexDigit(scnr);
			if (!ch) {
				emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
				break;
			}
			sequence += ch;
		}
		return `\\${unicode}${sequence}`;
	}
	function isInvalidIdentifier(ch) {
		return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
	}
	function readInvalidIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let identifiers = "";
		while (ch = takeChar(scnr, isInvalidIdentifier)) identifiers += ch;
		return identifiers;
	}
	function readLinkedModifier(scnr) {
		let ch = "";
		let name = "";
		while (ch = takeIdentifierChar(scnr)) name += ch;
		return name;
	}
	function readLinkedRefer(scnr) {
		const fn = (buf) => {
			const ch = scnr.currentChar();
			if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) return buf;
			else if (ch === CHAR_SP) return buf;
			else if (ch === CHAR_LF || ch === DOT) {
				buf += ch;
				scnr.next();
				return fn(buf);
			} else {
				buf += ch;
				scnr.next();
				return fn(buf);
			}
		};
		return fn("");
	}
	function readPlural(scnr) {
		skipSpaces(scnr);
		const plural = eat(scnr, "|");
		skipSpaces(scnr);
		return plural;
	}
	function readTokenInPlaceholder(scnr, context$1) {
		let token = null;
		switch (scnr.currentChar()) {
			case "{":
				if (context$1.braceNest >= 1) emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context$1, 2, "{");
				skipSpaces(scnr);
				context$1.braceNest++;
				return token;
			case "}":
				if (context$1.braceNest > 0 && context$1.currentType === 2) emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context$1, 3, "}");
				context$1.braceNest--;
				context$1.braceNest > 0 && skipSpaces(scnr);
				if (context$1.inLinked && context$1.braceNest === 0) context$1.inLinked = false;
				return token;
			case "@":
				if (context$1.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
				token = readTokenInLinked(scnr, context$1) || getEndToken(context$1);
				context$1.braceNest = 0;
				return token;
			default: {
				let validNamedIdentifier = true;
				let validListIdentifier = true;
				let validLiteral = true;
				if (isPluralStart(scnr)) {
					if (context$1.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					token = getToken(context$1, 1, readPlural(scnr));
					context$1.braceNest = 0;
					context$1.inLinked = false;
					return token;
				}
				if (context$1.braceNest > 0 && (context$1.currentType === 4 || context$1.currentType === 5 || context$1.currentType === 6)) {
					emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					context$1.braceNest = 0;
					return readToken(scnr, context$1);
				}
				if (validNamedIdentifier = isNamedIdentifierStart(scnr, context$1)) {
					token = getToken(context$1, 4, readNamedIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validListIdentifier = isListIdentifierStart(scnr, context$1)) {
					token = getToken(context$1, 5, readListIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validLiteral = isLiteralStart(scnr, context$1)) {
					token = getToken(context$1, 6, readLiteral(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
					token = getToken(context$1, 12, readInvalidIdentifier(scnr));
					emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
					skipSpaces(scnr);
					return token;
				}
				break;
			}
		}
		return token;
	}
	function readTokenInLinked(scnr, context$1) {
		const { currentType } = context$1;
		let token = null;
		const ch = scnr.currentChar();
		if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
		switch (ch) {
			case "@":
				scnr.next();
				token = getToken(context$1, 7, "@");
				context$1.inLinked = true;
				return token;
			case ".":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context$1, 8, ".");
			case ":":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context$1, 9, ":");
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context$1, 1, readPlural(scnr));
					context$1.braceNest = 0;
					context$1.inLinked = false;
					return token;
				}
				if (isLinkedDotStart(scnr, context$1) || isLinkedDelimiterStart(scnr, context$1)) {
					skipSpaces(scnr);
					return readTokenInLinked(scnr, context$1);
				}
				if (isLinkedModifierStart(scnr, context$1)) {
					skipSpaces(scnr);
					return getToken(context$1, 11, readLinkedModifier(scnr));
				}
				if (isLinkedReferStart(scnr, context$1)) {
					skipSpaces(scnr);
					if (ch === "{") return readTokenInPlaceholder(scnr, context$1) || token;
					else return getToken(context$1, 10, readLinkedRefer(scnr));
				}
				if (currentType === 7) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
				context$1.braceNest = 0;
				context$1.inLinked = false;
				return readToken(scnr, context$1);
		}
	}
	function readToken(scnr, context$1) {
		let token = { type: 13 };
		if (context$1.braceNest > 0) return readTokenInPlaceholder(scnr, context$1) || getEndToken(context$1);
		if (context$1.inLinked) return readTokenInLinked(scnr, context$1) || getEndToken(context$1);
		switch (scnr.currentChar()) {
			case "{": return readTokenInPlaceholder(scnr, context$1) || getEndToken(context$1);
			case "}":
				emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
				scnr.next();
				return getToken(context$1, 3, "}");
			case "@": return readTokenInLinked(scnr, context$1) || getEndToken(context$1);
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context$1, 1, readPlural(scnr));
					context$1.braceNest = 0;
					context$1.inLinked = false;
					return token;
				}
				if (isTextStart(scnr)) return getToken(context$1, 0, readText(scnr));
				break;
		}
		return token;
	}
	function nextToken() {
		const { currentType, offset, startLoc, endLoc } = _context;
		_context.lastType = currentType;
		_context.lastOffset = offset;
		_context.lastStartLoc = startLoc;
		_context.lastEndLoc = endLoc;
		_context.offset = currentOffset();
		_context.startLoc = currentPosition();
		if (_scnr.currentChar() === EOF) return getToken(_context, 13);
		return readToken(_scnr, _context);
	}
	return {
		nextToken,
		currentOffset,
		currentPosition,
		context
	};
}
var ERROR_DOMAIN$2 = "parser";
var KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
	switch (match) {
		case `\\\\`: return `\\`;
		case `\\\'`: return `\'`;
		default: {
			const codePoint = parseInt(codePoint4 || codePoint6, 16);
			if (codePoint <= 55295 || codePoint >= 57344) return String.fromCodePoint(codePoint);
			return "�";
		}
	}
}
function createParser(options = {}) {
	const location = options.location !== false;
	const { onError } = options;
	function emitError(tokenzer, code, start, offset, ...args) {
		const end = tokenzer.currentPosition();
		end.offset += offset;
		end.column += offset;
		if (onError) onError(createCompileError(code, location ? createLocation(start, end) : null, {
			domain: ERROR_DOMAIN$2,
			args
		}));
	}
	function startNode(type, offset, loc) {
		const node = { type };
		if (location) {
			node.start = offset;
			node.end = offset;
			node.loc = {
				start: loc,
				end: loc
			};
		}
		return node;
	}
	function endNode(node, offset, pos, type) {
		if (location) {
			node.end = offset;
			if (node.loc) node.loc.end = pos;
		}
	}
	function parseText(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(3, context.offset, context.startLoc);
		node.value = value;
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseList(tokenizer, index) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(5, offset, loc);
		node.index = parseInt(index, 10);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseNamed(tokenizer, key) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(4, offset, loc);
		node.key = key;
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLiteral(tokenizer, value) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(9, offset, loc);
		node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinkedModifier(tokenizer) {
		const token = tokenizer.nextToken();
		const context = tokenizer.context();
		const { lastOffset: offset, lastStartLoc: loc } = context;
		const node = startNode(8, offset, loc);
		if (token.type !== 11) {
			emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
			node.value = "";
			endNode(node, offset, loc);
			return {
				nextConsumeToken: token,
				node
			};
		}
		if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		node.value = token.value || "";
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node };
	}
	function parseLinkedKey(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(7, context.offset, context.startLoc);
		node.value = value;
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinked(tokenizer) {
		const context = tokenizer.context();
		const linkedNode = startNode(6, context.offset, context.startLoc);
		let token = tokenizer.nextToken();
		if (token.type === 8) {
			const parsed = parseLinkedModifier(tokenizer);
			linkedNode.modifier = parsed.node;
			token = parsed.nextConsumeToken || tokenizer.nextToken();
		}
		if (token.type !== 9) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		token = tokenizer.nextToken();
		if (token.type === 2) token = tokenizer.nextToken();
		switch (token.type) {
			case 10:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
				break;
			case 4:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseNamed(tokenizer, token.value || "");
				break;
			case 5:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseList(tokenizer, token.value || "");
				break;
			case 6:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLiteral(tokenizer, token.value || "");
				break;
			default: {
				emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
				const nextContext = tokenizer.context();
				const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
				emptyLinkedKeyNode.value = "";
				endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
				linkedNode.key = emptyLinkedKeyNode;
				endNode(linkedNode, nextContext.offset, nextContext.startLoc);
				return {
					nextConsumeToken: token,
					node: linkedNode
				};
			}
		}
		endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node: linkedNode };
	}
	function parseMessage(tokenizer) {
		const context = tokenizer.context();
		const node = startNode(2, context.currentType === 1 ? tokenizer.currentOffset() : context.offset, context.currentType === 1 ? context.endLoc : context.startLoc);
		node.items = [];
		let nextToken = null;
		do {
			const token = nextToken || tokenizer.nextToken();
			nextToken = null;
			switch (token.type) {
				case 0:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseText(tokenizer, token.value || ""));
					break;
				case 5:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseList(tokenizer, token.value || ""));
					break;
				case 4:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseNamed(tokenizer, token.value || ""));
					break;
				case 6:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseLiteral(tokenizer, token.value || ""));
					break;
				case 7: {
					const parsed = parseLinked(tokenizer);
					node.items.push(parsed.node);
					nextToken = parsed.nextConsumeToken || null;
					break;
				}
			}
		} while (context.currentType !== 13 && context.currentType !== 1);
		endNode(node, context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset(), context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition());
		return node;
	}
	function parsePlural(tokenizer, offset, loc, msgNode) {
		const context = tokenizer.context();
		let hasEmptyMessage = msgNode.items.length === 0;
		const node = startNode(1, offset, loc);
		node.cases = [];
		node.cases.push(msgNode);
		do {
			const msg = parseMessage(tokenizer);
			if (!hasEmptyMessage) hasEmptyMessage = msg.items.length === 0;
			node.cases.push(msg);
		} while (context.currentType !== 13);
		if (hasEmptyMessage) emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseResource(tokenizer) {
		const context = tokenizer.context();
		const { offset, startLoc } = context;
		const msgNode = parseMessage(tokenizer);
		if (context.currentType === 13) return msgNode;
		else return parsePlural(tokenizer, offset, startLoc, msgNode);
	}
	function parse$1(source) {
		const tokenizer = createTokenizer(source, assign({}, options));
		const context = tokenizer.context();
		const node = startNode(0, context.offset, context.startLoc);
		if (location && node.loc) node.loc.source = source;
		node.body = parseResource(tokenizer);
		if (options.onCacheKey) node.cacheKey = options.onCacheKey(source);
		if (context.currentType !== 13) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	return { parse: parse$1 };
}
function getTokenCaption(token) {
	if (token.type === 13) return "EOF";
	const name = (token.value || "").replace(/\r?\n/gu, "\\n");
	return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
	const _context = {
		ast,
		helpers: /* @__PURE__ */ new Set()
	};
	const context = () => _context;
	const helper = (name) => {
		_context.helpers.add(name);
		return name;
	};
	return {
		context,
		helper
	};
}
function traverseNodes(nodes, transformer) {
	for (let i = 0; i < nodes.length; i++) traverseNode(nodes[i], transformer);
}
function traverseNode(node, transformer) {
	switch (node.type) {
		case 1:
			traverseNodes(node.cases, transformer);
			transformer.helper("plural");
			break;
		case 2:
			traverseNodes(node.items, transformer);
			break;
		case 6:
			traverseNode(node.key, transformer);
			transformer.helper("linked");
			transformer.helper("type");
			break;
		case 5:
			transformer.helper("interpolate");
			transformer.helper("list");
			break;
		case 4:
			transformer.helper("interpolate");
			transformer.helper("named");
			break;
	}
}
function transform(ast, options = {}) {
	const transformer = createTransformer(ast);
	transformer.helper("normalize");
	ast.body && traverseNode(ast.body, transformer);
	const context = transformer.context();
	ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
	const body = ast.body;
	if (body.type === 2) optimizeMessageNode(body);
	else body.cases.forEach((c) => optimizeMessageNode(c));
	return ast;
}
function optimizeMessageNode(message) {
	if (message.items.length === 1) {
		const item = message.items[0];
		if (item.type === 3 || item.type === 9) {
			message.static = item.value;
			delete item.value;
		}
	} else {
		const values = [];
		for (let i = 0; i < message.items.length; i++) {
			const item = message.items[i];
			if (!(item.type === 3 || item.type === 9)) break;
			if (item.value == null) break;
			values.push(item.value);
		}
		if (values.length === message.items.length) {
			message.static = join(values);
			for (let i = 0; i < message.items.length; i++) {
				const item = message.items[i];
				if (item.type === 3 || item.type === 9) delete item.value;
			}
		}
	}
}
function minify(node) {
	node.t = node.type;
	switch (node.type) {
		case 0: {
			const resource = node;
			minify(resource.body);
			resource.b = resource.body;
			delete resource.body;
			break;
		}
		case 1: {
			const plural = node;
			const cases = plural.cases;
			for (let i = 0; i < cases.length; i++) minify(cases[i]);
			plural.c = cases;
			delete plural.cases;
			break;
		}
		case 2: {
			const message = node;
			const items = message.items;
			for (let i = 0; i < items.length; i++) minify(items[i]);
			message.i = items;
			delete message.items;
			if (message.static) {
				message.s = message.static;
				delete message.static;
			}
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			const valueNode = node;
			if (valueNode.value) {
				valueNode.v = valueNode.value;
				delete valueNode.value;
			}
			break;
		}
		case 6: {
			const linked = node;
			minify(linked.key);
			linked.k = linked.key;
			delete linked.key;
			if (linked.modifier) {
				minify(linked.modifier);
				linked.m = linked.modifier;
				delete linked.modifier;
			}
			break;
		}
		case 5: {
			const list = node;
			list.i = list.index;
			delete list.index;
			break;
		}
		case 4: {
			const named = node;
			named.k = named.key;
			delete named.key;
			break;
		}
		default:
	}
	delete node.type;
}
function createCodeGenerator(ast, options) {
	const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
	const location = options.location !== false;
	const _context = {
		filename,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode,
		needIndent: _needIndent,
		indentLevel: 0
	};
	if (location && ast.loc) _context.source = ast.loc.source;
	const context = () => _context;
	function push(code, node) {
		_context.code += code;
	}
	function _newline(n, withBreakLine = true) {
		const _breakLineCode = withBreakLine ? breakLineCode : "";
		push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
	}
	function indent(withNewLine = true) {
		const level = ++_context.indentLevel;
		withNewLine && _newline(level);
	}
	function deindent(withNewLine = true) {
		const level = --_context.indentLevel;
		withNewLine && _newline(level);
	}
	function newline() {
		_newline(_context.indentLevel);
	}
	const helper = (key) => `_${key}`;
	const needIndent = () => _context.needIndent;
	return {
		context,
		push,
		indent,
		deindent,
		newline,
		helper,
		needIndent
	};
}
function generateLinkedNode(generator, node) {
	const { helper } = generator;
	generator.push(`${helper("linked")}(`);
	generateNode(generator, node.key);
	if (node.modifier) {
		generator.push(`, `);
		generateNode(generator, node.modifier);
		generator.push(`, _type`);
	} else generator.push(`, undefined, _type`);
	generator.push(`)`);
}
function generateMessageNode(generator, node) {
	const { helper, needIndent } = generator;
	generator.push(`${helper("normalize")}([`);
	generator.indent(needIndent());
	const length = node.items.length;
	for (let i = 0; i < length; i++) {
		generateNode(generator, node.items[i]);
		if (i === length - 1) break;
		generator.push(", ");
	}
	generator.deindent(needIndent());
	generator.push("])");
}
function generatePluralNode(generator, node) {
	const { helper, needIndent } = generator;
	if (node.cases.length > 1) {
		generator.push(`${helper("plural")}([`);
		generator.indent(needIndent());
		const length = node.cases.length;
		for (let i = 0; i < length; i++) {
			generateNode(generator, node.cases[i]);
			if (i === length - 1) break;
			generator.push(", ");
		}
		generator.deindent(needIndent());
		generator.push(`])`);
	}
}
function generateResource(generator, node) {
	if (node.body) generateNode(generator, node.body);
	else generator.push("null");
}
function generateNode(generator, node) {
	const { helper } = generator;
	switch (node.type) {
		case 0:
			generateResource(generator, node);
			break;
		case 1:
			generatePluralNode(generator, node);
			break;
		case 2:
			generateMessageNode(generator, node);
			break;
		case 6:
			generateLinkedNode(generator, node);
			break;
		case 8:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 7:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 5:
			generator.push(`${helper("interpolate")}(${helper("list")}(${node.index}))`, node);
			break;
		case 4:
			generator.push(`${helper("interpolate")}(${helper("named")}(${JSON.stringify(node.key)}))`, node);
			break;
		case 9:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 3:
			generator.push(JSON.stringify(node.value), node);
			break;
		default:
	}
}
var generate = (ast, options = {}) => {
	const mode = isString(options.mode) ? options.mode : "normal";
	const filename = isString(options.filename) ? options.filename : "message.intl";
	const sourceMap = !!options.sourceMap;
	const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
	const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
	const helpers = ast.helpers || [];
	const generator = createCodeGenerator(ast, {
		mode,
		filename,
		sourceMap,
		breakLineCode,
		needIndent
	});
	generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
	generator.indent(needIndent);
	if (helpers.length > 0) {
		generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
		generator.newline();
	}
	generator.push(`return `);
	generateNode(generator, ast);
	generator.deindent(needIndent);
	generator.push(`}`);
	delete ast.helpers;
	const { code, map } = generator.context();
	return {
		ast,
		code,
		map: map ? map.toJSON() : void 0
	};
};
function baseCompile(source, options = {}) {
	const assignedOptions = assign({}, options);
	const jit = !!assignedOptions.jit;
	const enalbeMinify = !!assignedOptions.minify;
	const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
	const ast = createParser(assignedOptions).parse(source);
	if (!jit) {
		transform(ast, assignedOptions);
		return generate(ast, assignedOptions);
	} else {
		enambeOptimize && optimize(ast);
		enalbeMinify && minify(ast);
		return {
			ast,
			code: ""
		};
	}
}
function initFeatureFlags$1() {
	if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
	if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
}
function isMessageAST(val) {
	return isObject$4(val) && resolveType(val) === 0 && (hasOwn$1(val, "b") || hasOwn$1(val, "body"));
}
var PROPS_BODY = ["b", "body"];
function resolveBody(node) {
	return resolveProps(node, PROPS_BODY);
}
var PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
	return resolveProps(node, PROPS_CASES, []);
}
var PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
	return resolveProps(node, PROPS_STATIC);
}
var PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
	return resolveProps(node, PROPS_ITEMS, []);
}
var PROPS_TYPE = ["t", "type"];
function resolveType(node) {
	return resolveProps(node, PROPS_TYPE);
}
var PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
	const resolved = resolveProps(node, PROPS_VALUE);
	if (resolved != null) return resolved;
	else throw createUnhandleNodeError(type);
}
var PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
	return resolveProps(node, PROPS_MODIFIER);
}
var PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
	const resolved = resolveProps(node, PROPS_KEY);
	if (resolved) return resolved;
	else throw createUnhandleNodeError(6);
}
function resolveProps(node, props, defaultValue) {
	for (let i = 0; i < props.length; i++) {
		const prop = props[i];
		if (hasOwn$1(node, prop) && node[prop] != null) return node[prop];
	}
	return defaultValue;
}
var AST_NODE_PROPS_KEYS = [
	...PROPS_BODY,
	...PROPS_CASES,
	...PROPS_STATIC,
	...PROPS_ITEMS,
	...PROPS_KEY,
	...PROPS_MODIFIER,
	...PROPS_VALUE,
	...PROPS_TYPE
];
function createUnhandleNodeError(type) {
	return /* @__PURE__ */ new Error(`unhandled node type: ${type}`);
}
function format$1(ast) {
	const msg = (ctx) => formatParts(ctx, ast);
	return msg;
}
function formatParts(ctx, ast) {
	const body = resolveBody(ast);
	if (body == null) throw createUnhandleNodeError(0);
	if (resolveType(body) === 1) {
		const cases = resolveCases(body);
		return ctx.plural(cases.reduce((messages, c) => [...messages, formatMessageParts(ctx, c)], []));
	} else return formatMessageParts(ctx, body);
}
function formatMessageParts(ctx, node) {
	const static_ = resolveStatic(node);
	if (static_ != null) return ctx.type === "text" ? static_ : ctx.normalize([static_]);
	else {
		const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
		return ctx.normalize(messages);
	}
}
function formatMessagePart(ctx, node) {
	const type = resolveType(node);
	switch (type) {
		case 3: return resolveValue$1(node, type);
		case 9: return resolveValue$1(node, type);
		case 4: {
			const named = node;
			if (hasOwn$1(named, "k") && named.k) return ctx.interpolate(ctx.named(named.k));
			if (hasOwn$1(named, "key") && named.key) return ctx.interpolate(ctx.named(named.key));
			throw createUnhandleNodeError(type);
		}
		case 5: {
			const list = node;
			if (hasOwn$1(list, "i") && isNumber(list.i)) return ctx.interpolate(ctx.list(list.i));
			if (hasOwn$1(list, "index") && isNumber(list.index)) return ctx.interpolate(ctx.list(list.index));
			throw createUnhandleNodeError(type);
		}
		case 6: {
			const linked = node;
			const modifier = resolveLinkedModifier(linked);
			const key = resolveLinkedKey(linked);
			return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
		}
		case 7: return resolveValue$1(node, type);
		case 8: return resolveValue$1(node, type);
		default: throw new Error(`unhandled node on format message part: ${type}`);
	}
}
var defaultOnCacheKey = (message) => message;
var compileCache = create();
function baseCompile$1(message, options = {}) {
	let detectError = false;
	const onError = options.onError || defaultOnError;
	options.onError = (err) => {
		detectError = true;
		onError(err);
	};
	return {
		...baseCompile(message, options),
		detectError
	};
}
/* @__NO_SIDE_EFFECTS__ */
function compile(message, context) {
	if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && isString(message)) {
		isBoolean(context.warnHtmlMessage) && context.warnHtmlMessage;
		const cacheKey = (context.onCacheKey || defaultOnCacheKey)(message);
		const cached = compileCache[cacheKey];
		if (cached) return cached;
		const { ast, detectError } = baseCompile$1(message, {
			...context,
			location: false,
			jit: true
		});
		const msg = format$1(ast);
		return !detectError ? compileCache[cacheKey] = msg : msg;
	} else {
		const cacheKey = message.cacheKey;
		if (cacheKey) {
			const cached = compileCache[cacheKey];
			if (cached) return cached;
			return compileCache[cacheKey] = format$1(message);
		} else return format$1(message);
	}
}
var devtools = null;
function setDevToolsHook(hook) {
	devtools = hook;
}
function initI18nDevTools(i18n$1, version$1, meta) {
	devtools && devtools.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: i18n$1,
		version: version$1,
		meta
	});
}
var translateDevTools = /* @__PURE__ */ createDevToolsHook("function:translate");
function createDevToolsHook(hook) {
	return (payloads) => devtools && devtools.emit(hook, payloads);
}
var CoreErrorCodes = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function createCoreError(code) {
	return createCompileError(code, null, void 0);
}
CoreErrorCodes.INVALID_ARGUMENT, CoreErrorCodes.INVALID_DATE_ARGUMENT, CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT, CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE, CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE, CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION, CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE;
function getLocale(context, options) {
	return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
var _resolveLocale;
function resolveLocale(locale) {
	if (isString(locale)) return locale;
	else if (isFunction$2(locale)) if (locale.resolvedOnce && _resolveLocale != null) return _resolveLocale;
	else if (locale.constructor.name === "Function") {
		const resolve = locale();
		if (isPromise(resolve)) throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
		return _resolveLocale = resolve;
	} else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
}
function fallbackWithSimple(ctx, fallback, start) {
	return [...new Set([start, ...isArray$1(fallback) ? fallback : isObject$4(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
	const startLocale = isString(start) ? start : DEFAULT_LOCALE;
	const context = ctx;
	if (!context.__localeChainCache) context.__localeChainCache = /* @__PURE__ */ new Map();
	let chain = context.__localeChainCache.get(startLocale);
	if (!chain) {
		chain = [];
		let block = [start];
		while (isArray$1(block)) block = appendBlockToChain(chain, block, fallback);
		const defaults = isArray$1(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
		block = isString(defaults) ? [defaults] : defaults;
		if (isArray$1(block)) appendBlockToChain(chain, block, false);
		context.__localeChainCache.set(startLocale, chain);
	}
	return chain;
}
function appendBlockToChain(chain, block, blocks) {
	let follow = true;
	for (let i = 0; i < block.length && isBoolean(follow); i++) {
		const locale = block[i];
		if (isString(locale)) follow = appendLocaleToChain(chain, block[i], blocks);
	}
	return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
	let follow;
	const tokens = locale.split("-");
	do {
		follow = appendItemToChain(chain, tokens.join("-"), blocks);
		tokens.splice(-1, 1);
	} while (tokens.length && follow === true);
	return follow;
}
function appendItemToChain(chain, target, blocks) {
	let follow = false;
	if (!chain.includes(target)) {
		follow = true;
		if (target) {
			follow = target[target.length - 1] !== "!";
			const locale = target.replace(/!/g, "");
			chain.push(locale);
			if ((isArray$1(blocks) || isPlainObject(blocks)) && blocks[locale]) follow = blocks[locale];
		}
	}
	return follow;
}
var pathStateMachine = [];
pathStateMachine[0] = {
	["w"]: [0],
	["i"]: [3, 0],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[1] = {
	["w"]: [1],
	["."]: [2],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[2] = {
	["w"]: [2],
	["i"]: [3, 0],
	["0"]: [3, 0]
};
pathStateMachine[3] = {
	["i"]: [3, 0],
	["0"]: [3, 0],
	["w"]: [1, 1],
	["."]: [2, 1],
	["["]: [4, 1],
	["o"]: [7, 1]
};
pathStateMachine[4] = {
	["'"]: [5, 0],
	["\""]: [6, 0],
	["["]: [4, 2],
	["]"]: [1, 3],
	["o"]: 8,
	["l"]: [4, 0]
};
pathStateMachine[5] = {
	["'"]: [4, 0],
	["o"]: 8,
	["l"]: [5, 0]
};
pathStateMachine[6] = {
	["\""]: [4, 0],
	["o"]: 8,
	["l"]: [6, 0]
};
var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
	return literalValueRE.test(exp);
}
function stripQuotes(str) {
	const a = str.charCodeAt(0);
	return a === str.charCodeAt(str.length - 1) && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
	if (ch === void 0 || ch === null) return "o";
	switch (ch.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return ch;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
function formatSubPath(path) {
	const trimmed = path.trim();
	if (path.charAt(0) === "0" && isNaN(parseInt(path))) return false;
	return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
	const keys = [];
	let index = -1;
	let mode = 0;
	let subPathDepth = 0;
	let c;
	let key;
	let newChar;
	let type;
	let transition;
	let action;
	let typeMap;
	const actions = [];
	actions[0] = () => {
		if (key === void 0) key = newChar;
		else key += newChar;
	};
	actions[1] = () => {
		if (key !== void 0) {
			keys.push(key);
			key = void 0;
		}
	};
	actions[2] = () => {
		actions[0]();
		subPathDepth++;
	};
	actions[3] = () => {
		if (subPathDepth > 0) {
			subPathDepth--;
			mode = 4;
			actions[0]();
		} else {
			subPathDepth = 0;
			if (key === void 0) return false;
			key = formatSubPath(key);
			if (key === false) return false;
			else actions[1]();
		}
	};
	function maybeUnescapeQuote() {
		const nextChar = path[index + 1];
		if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === "\"") {
			index++;
			newChar = "\\" + nextChar;
			actions[0]();
			return true;
		}
	}
	while (mode !== null) {
		index++;
		c = path[index];
		if (c === "\\" && maybeUnescapeQuote()) continue;
		type = getPathCharType(c);
		typeMap = pathStateMachine[mode];
		transition = typeMap[type] || typeMap["l"] || 8;
		if (transition === 8) return;
		mode = transition[0];
		if (transition[1] !== void 0) {
			action = actions[transition[1]];
			if (action) {
				newChar = c;
				if (action() === false) return;
			}
		}
		if (mode === 7) return keys;
	}
}
var cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
	return isObject$4(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
	if (!isObject$4(obj)) return null;
	let hit = cache.get(path);
	if (!hit) {
		hit = parse(path);
		if (hit) cache.set(path, hit);
	}
	if (!hit) return null;
	const len = hit.length;
	let last = obj;
	let i = 0;
	while (i < len) {
		const key = hit[i];
		if (AST_NODE_PROPS_KEYS.includes(key) && isMessageAST(last)) return null;
		const val = last[key];
		if (val === void 0) return null;
		if (isFunction$2(last)) return null;
		last = val;
		i++;
	}
	return last;
}
var CoreWarnCodes = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
};
CoreWarnCodes.NOT_FOUND_KEY, CoreWarnCodes.FALLBACK_TO_TRANSLATE, CoreWarnCodes.CANNOT_FORMAT_NUMBER, CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, CoreWarnCodes.CANNOT_FORMAT_DATE, CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER;
var VERSION$1 = "11.1.10";
var DEFAULT_LOCALE = "en-US";
var capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
	return {
		upper: (val, type) => {
			return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
		},
		lower: (val, type) => {
			return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
		},
		capitalize: (val, type) => {
			return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
		}
	};
}
var _compiler;
function registerMessageCompiler(compiler) {
	_compiler = compiler;
}
var _resolver;
function registerMessageResolver(resolver) {
	_resolver = resolver;
}
var _fallbacker;
function registerLocaleFallbacker(fallbacker) {
	_fallbacker = fallbacker;
}
var _additionalMeta = null;
var getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
var _fallbackContext = null;
var setFallbackContext = (context) => {
	_fallbackContext = context;
};
var getFallbackContext = () => _fallbackContext;
var _cid = 0;
function createCoreContext(options = {}) {
	const onWarn = isFunction$2(options.onWarn) ? options.onWarn : warn;
	const version$1 = isString(options.version) ? options.version : VERSION$1;
	const locale = isString(options.locale) || isFunction$2(options.locale) ? options.locale : DEFAULT_LOCALE;
	const _locale = isFunction$2(locale) ? DEFAULT_LOCALE : locale;
	const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
	const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
	const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
	const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
	const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
	const pluralRules = options.pluralRules || create();
	const missing = isFunction$2(options.missing) ? options.missing : null;
	const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	const fallbackFormat = !!options.fallbackFormat;
	const unresolving = !!options.unresolving;
	const postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : null;
	const processor = isPlainObject(options.processor) ? options.processor : null;
	const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	const escapeParameter = !!options.escapeParameter;
	const messageCompiler = isFunction$2(options.messageCompiler) ? options.messageCompiler : _compiler;
	const messageResolver = isFunction$2(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
	const localeFallbacker = isFunction$2(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
	const fallbackContext = isObject$4(options.fallbackContext) ? options.fallbackContext : void 0;
	const internalOptions = options;
	const __datetimeFormatters = isObject$4(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
	const __numberFormatters = isObject$4(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
	const __meta = isObject$4(internalOptions.__meta) ? internalOptions.__meta : {};
	_cid++;
	const context = {
		version: version$1,
		cid: _cid,
		locale,
		fallbackLocale,
		messages,
		modifiers,
		pluralRules,
		missing,
		missingWarn,
		fallbackWarn,
		fallbackFormat,
		unresolving,
		postTranslation,
		processor,
		warnHtmlMessage,
		escapeParameter,
		messageCompiler,
		messageResolver,
		localeFallbacker,
		fallbackContext,
		onWarn,
		__meta
	};
	context.datetimeFormats = datetimeFormats;
	context.numberFormats = numberFormats;
	context.__datetimeFormatters = __datetimeFormatters;
	context.__numberFormatters = __numberFormatters;
	if (__INTLIFY_PROD_DEVTOOLS__) initI18nDevTools(context, version$1, __meta);
	return context;
}
var createResources = (locale) => ({ [locale]: create() });
function handleMissing(context, key, locale, missingWarn, type) {
	const { missing, onWarn } = context;
	if (missing !== null) {
		const ret = missing(context, locale, key, type);
		return isString(ret) ? ret : key;
	} else return key;
}
function updateFallbackLocale(ctx, locale, fallback) {
	const context = ctx;
	context.__localeChainCache = /* @__PURE__ */ new Map();
	ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
	if (locale === compareLocale) return false;
	return locale.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
	const index = locales.indexOf(targetLocale);
	if (index === -1) return false;
	for (let i = index + 1; i < locales.length; i++) if (isAlmostSameLocale(targetLocale, locales[i])) return true;
	return false;
}
var intlDefined = typeof Intl !== "undefined";
intlDefined && Intl.DateTimeFormat, intlDefined && Intl.NumberFormat;
function datetime(context, ...args) {
	const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __datetimeFormatters } = context;
	const [key, value, options, overrides] = parseDateTimeArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.DateTimeFormat(locale, overrides).format(value);
	let datetimeFormat = {};
	let targetLocale;
	let format$2 = null;
	const type = "datetime format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		datetimeFormat = datetimeFormats[targetLocale] || {};
		format$2 = datetimeFormat[key];
		if (isPlainObject(format$2)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
	}
	if (!isPlainObject(format$2) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __datetimeFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format$2, overrides));
		__datetimeFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
var DATETIME_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	let value;
	if (isString(arg1)) {
		const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!matches) throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
		value = new Date(dateTime);
		try {
			value.toISOString();
		} catch {
			throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (isDate(arg1)) {
		if (isNaN(arg1.getTime())) throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
		value = arg1;
	} else if (isNumber(arg1)) value = arg1;
	else throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
function clearDateTimeFormat(ctx, locale, format$2) {
	const context = ctx;
	for (const key in format$2) {
		const id = `${locale}__${key}`;
		if (!context.__datetimeFormatters.has(id)) continue;
		context.__datetimeFormatters.delete(id);
	}
}
function number(context, ...args) {
	const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __numberFormatters } = context;
	const [key, value, options, overrides] = parseNumberArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.NumberFormat(locale, overrides).format(value);
	let numberFormat = {};
	let targetLocale;
	let format$2 = null;
	const type = "number format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		numberFormat = numberFormats[targetLocale] || {};
		format$2 = numberFormat[key];
		if (isPlainObject(format$2)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
	}
	if (!isPlainObject(format$2) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __numberFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.NumberFormat(targetLocale, assign({}, format$2, overrides));
		__numberFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
var NUMBER_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay"
];
function parseNumberArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	if (!isNumber(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const value = arg1;
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
function clearNumberFormat(ctx, locale, format$2) {
	const context = ctx;
	for (const key in format$2) {
		const id = `${locale}__${key}`;
		if (!context.__numberFormatters.has(id)) continue;
		context.__numberFormatters.delete(id);
	}
}
var DEFAULT_MODIFIER = (str) => str;
var DEFAULT_MESSAGE = (ctx) => "";
var DEFAULT_MESSAGE_DATA_TYPE = "text";
var DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
var DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
	choice = Math.abs(choice);
	if (choicesLength === 2) return choice ? choice > 1 ? 1 : 0 : 1;
	return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
	const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
	return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
	if (!props.count) props.count = pluralIndex;
	if (!props.n) props.n = pluralIndex;
}
function createMessageContext(options = {}) {
	const locale = options.locale;
	const pluralIndex = getPluralIndex(options);
	const pluralRule = isObject$4(options.pluralRules) && isString(locale) && isFunction$2(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
	const orgPluralRule = isObject$4(options.pluralRules) && isString(locale) && isFunction$2(options.pluralRules[locale]) ? pluralDefault : void 0;
	const plural = (messages) => {
		return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
	};
	const _list = options.list || [];
	const list = (index) => _list[index];
	const _named = options.named || create();
	isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
	const named = (key) => _named[key];
	function message(key, useLinked) {
		const msg = isFunction$2(options.messages) ? options.messages(key, !!useLinked) : isObject$4(options.messages) ? options.messages[key] : false;
		return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
	}
	const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
	const normalize$1 = isPlainObject(options.processor) && isFunction$2(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
	const interpolate = isPlainObject(options.processor) && isFunction$2(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
	const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
	const linked = (key, ...args) => {
		const [arg1, arg2] = args;
		let type$1 = "text";
		let modifier = "";
		if (args.length === 1) {
			if (isObject$4(arg1)) {
				modifier = arg1.modifier || modifier;
				type$1 = arg1.type || type$1;
			} else if (isString(arg1)) modifier = arg1 || modifier;
		} else if (args.length === 2) {
			if (isString(arg1)) modifier = arg1 || modifier;
			if (isString(arg2)) type$1 = arg2 || type$1;
		}
		const ret = message(key, true)(ctx);
		const msg = type$1 === "vnode" && isArray$1(ret) && modifier ? ret[0] : ret;
		return modifier ? _modifier(modifier)(msg, type$1) : msg;
	};
	const ctx = {
		["list"]: list,
		["named"]: named,
		["plural"]: plural,
		["linked"]: linked,
		["message"]: message,
		["type"]: type,
		["interpolate"]: interpolate,
		["normalize"]: normalize$1,
		["values"]: assign(create(), _list, _named)
	};
	return ctx;
}
var NOOP_MESSAGE_FUNCTION = () => "";
var isMessageFunction = (val) => isFunction$2(val);
function translate(context, ...args) {
	const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
	const [key, options] = parseTranslateArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
	const resolvedMessage = !!options.resolvedMessage;
	const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
	const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction$2(defaultMsgOrKey));
	const locale = getLocale(context, options);
	escapeParameter && escapeParams(options);
	let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
		key,
		locale,
		messages[locale] || create()
	];
	let format$2 = formatScope;
	let cacheBaseKey = key;
	if (!resolvedMessage && !(isString(format$2) || isMessageAST(format$2) || isMessageFunction(format$2))) {
		if (enableDefaultMsg) {
			format$2 = defaultMsgOrKey;
			cacheBaseKey = format$2;
		}
	}
	if (!resolvedMessage && (!(isString(format$2) || isMessageAST(format$2) || isMessageFunction(format$2)) || !isString(targetLocale))) return unresolving ? -1 : key;
	let occurred = false;
	const onError = () => {
		occurred = true;
	};
	const msg = !isMessageFunction(format$2) ? compileMessageFormat(context, key, targetLocale, format$2, cacheBaseKey, onError) : format$2;
	if (occurred) return format$2;
	const messaged = evaluateMessage(context, msg, createMessageContext(getMessageContextOptions(context, targetLocale, message, options)));
	let ret = postTranslation ? postTranslation(messaged, key) : messaged;
	if (escapeParameter && isString(ret)) ret = sanitizeTranslatedHtml(ret);
	if (__INTLIFY_PROD_DEVTOOLS__) {
		const payloads = {
			timestamp: Date.now(),
			key: isString(key) ? key : isMessageFunction(format$2) ? format$2.key : "",
			locale: targetLocale || (isMessageFunction(format$2) ? format$2.locale : ""),
			format: isString(format$2) ? format$2 : isMessageFunction(format$2) ? format$2.source : "",
			message: ret
		};
		payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
		translateDevTools(payloads);
	}
	return ret;
}
function escapeParams(options) {
	if (isArray$1(options.list)) options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
	else if (isObject$4(options.named)) Object.keys(options.named).forEach((key) => {
		if (isString(options.named[key])) options.named[key] = escapeHtml(options.named[key]);
	});
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
	const { messages, onWarn, messageResolver: resolveValue$2, localeFallbacker } = context;
	const locales = localeFallbacker(context, fallbackLocale, locale);
	let message = create();
	let targetLocale;
	let format$2 = null;
	const type = "translate";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		message = messages[targetLocale] || create();
		if ((format$2 = resolveValue$2(message, key)) === null) format$2 = message[key];
		if (isString(format$2) || isMessageAST(format$2) || isMessageFunction(format$2)) break;
		if (!isImplicitFallback(targetLocale, locales)) {
			const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
			if (missingRet !== key) format$2 = missingRet;
		}
	}
	return [
		format$2,
		targetLocale,
		message
	];
}
function compileMessageFormat(context, key, targetLocale, format$2, cacheBaseKey, onError) {
	const { messageCompiler, warnHtmlMessage } = context;
	if (isMessageFunction(format$2)) {
		const msg$1 = format$2;
		msg$1.locale = msg$1.locale || targetLocale;
		msg$1.key = msg$1.key || key;
		return msg$1;
	}
	if (messageCompiler == null) {
		const msg$1 = (() => format$2);
		msg$1.locale = targetLocale;
		msg$1.key = key;
		return msg$1;
	}
	const msg = messageCompiler(format$2, getCompileContext(context, targetLocale, cacheBaseKey, format$2, warnHtmlMessage, onError));
	msg.locale = targetLocale;
	msg.key = key;
	msg.source = format$2;
	return msg;
}
function evaluateMessage(context, msg, msgCtx) {
	return msg(msgCtx);
}
function parseTranslateArgs(...args) {
	const [arg1, arg2, arg3] = args;
	const options = create();
	if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
	if (isNumber(arg2)) options.plural = arg2;
	else if (isString(arg2)) options.default = arg2;
	else if (isPlainObject(arg2) && !isEmptyObject(arg2)) options.named = arg2;
	else if (isArray$1(arg2)) options.list = arg2;
	if (isNumber(arg3)) options.plural = arg3;
	else if (isString(arg3)) options.default = arg3;
	else if (isPlainObject(arg3)) assign(options, arg3);
	return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
	return {
		locale,
		key,
		warnHtmlMessage,
		onError: (err) => {
			onError && onError(err);
			throw err;
		},
		onCacheKey: (source$1) => generateFormatCacheKey(locale, key, source$1)
	};
}
function getMessageContextOptions(context, locale, message, options) {
	const { modifiers, pluralRules, messageResolver: resolveValue$2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
	const resolveMessage = (key, useLinked) => {
		let val = resolveValue$2(message, key);
		if (val == null && (fallbackContext || useLinked)) {
			const [, , message$1] = resolveMessageFormat(fallbackContext || context, key, locale, fallbackLocale, fallbackWarn, missingWarn);
			val = resolveValue$2(message$1, key);
		}
		if (isString(val) || isMessageAST(val)) {
			let occurred = false;
			const onError = () => {
				occurred = true;
			};
			const msg = compileMessageFormat(context, key, locale, val, key, onError);
			return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
		} else if (isMessageFunction(val)) return val;
		else return NOOP_MESSAGE_FUNCTION;
	};
	const ctxOptions = {
		locale,
		modifiers,
		pluralRules,
		messages: resolveMessage
	};
	if (context.processor) ctxOptions.processor = context.processor;
	if (options.list) ctxOptions.list = options.list;
	if (options.named) ctxOptions.named = options.named;
	if (isNumber(options.plural)) ctxOptions.pluralIndex = options.plural;
	return ctxOptions;
}
initFeatureFlags$1();
var VERSION = "11.1.10";
function initFeatureFlags() {
	if (typeof __VUE_I18N_FULL_INSTALL__ !== "boolean") getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
	if (typeof __VUE_I18N_LEGACY_API__ !== "boolean") getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
	if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
	if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
}
var I18nErrorCodes = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34,
	DUPLICATE_USE_I18N_CALLING: 35
};
function createI18nError(code, ...args) {
	return createCompileError(code, null, void 0);
}
I18nErrorCodes.UNEXPECTED_RETURN_TYPE, I18nErrorCodes.INVALID_ARGUMENT, I18nErrorCodes.MUST_BE_CALL_SETUP_TOP, I18nErrorCodes.NOT_INSTALLED, I18nErrorCodes.UNEXPECTED_ERROR, I18nErrorCodes.REQUIRED_VALUE, I18nErrorCodes.INVALID_VALUE, I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE, I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N, I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY, I18nErrorCodes.DUPLICATE_USE_I18N_CALLING;
var TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
var DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
var NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
var SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
var InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
var DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
var I18nWarnCodes = {
	FALLBACK_TO_ROOT: 8,
	NOT_FOUND_PARENT_SCOPE: 9,
	IGNORE_OBJ_FLATTEN: 10,
	DEPRECATE_LEGACY_MODE: 11,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12
};
I18nWarnCodes.FALLBACK_TO_ROOT, I18nWarnCodes.NOT_FOUND_PARENT_SCOPE, I18nWarnCodes.IGNORE_OBJ_FLATTEN, I18nWarnCodes.DEPRECATE_LEGACY_MODE, I18nWarnCodes.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE;
function handleFlatJson(obj) {
	if (!isObject$4(obj)) return obj;
	if (isMessageAST(obj)) return obj;
	for (const key in obj) {
		if (!hasOwn$1(obj, key)) continue;
		if (!key.includes(".")) {
			if (isObject$4(obj[key])) handleFlatJson(obj[key]);
		} else {
			const subKeys = key.split(".");
			const lastIndex = subKeys.length - 1;
			let currentObj = obj;
			let hasStringValue = false;
			for (let i = 0; i < lastIndex; i++) {
				if (subKeys[i] === "__proto__") throw new Error(`unsafe key: ${subKeys[i]}`);
				if (!(subKeys[i] in currentObj)) currentObj[subKeys[i]] = create();
				if (!isObject$4(currentObj[subKeys[i]])) {
					hasStringValue = true;
					break;
				}
				currentObj = currentObj[subKeys[i]];
			}
			if (!hasStringValue) {
				if (!isMessageAST(currentObj)) {
					currentObj[subKeys[lastIndex]] = obj[key];
					delete obj[key];
				} else if (!AST_NODE_PROPS_KEYS.includes(subKeys[lastIndex])) delete obj[key];
			}
			if (!isMessageAST(currentObj)) {
				const target = currentObj[subKeys[lastIndex]];
				if (isObject$4(target)) handleFlatJson(target);
			}
		}
	}
	return obj;
}
function getLocaleMessages(locale, options) {
	const { messages, __i18n, messageResolver, flatJson } = options;
	const ret = isPlainObject(messages) ? messages : isArray$1(__i18n) ? create() : { [locale]: create() };
	if (isArray$1(__i18n)) __i18n.forEach((custom) => {
		if ("locale" in custom && "resource" in custom) {
			const { locale: locale$1, resource } = custom;
			if (locale$1) {
				ret[locale$1] = ret[locale$1] || create();
				deepCopy(resource, ret[locale$1]);
			} else deepCopy(resource, ret);
		} else isString(custom) && deepCopy(JSON.parse(custom), ret);
	});
	if (messageResolver == null && flatJson) {
		for (const key in ret) if (hasOwn$1(ret, key)) handleFlatJson(ret[key]);
	}
	return ret;
}
function getComponentOptions(instance) {
	return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
	let messages = isObject$4(options.messages) ? options.messages : create();
	if ("__i18nGlobal" in componentOptions) messages = getLocaleMessages(gl.locale.value, {
		messages,
		__i18n: componentOptions.__i18nGlobal
	});
	const locales = Object.keys(messages);
	if (locales.length) locales.forEach((locale) => {
		gl.mergeLocaleMessage(locale, messages[locale]);
	});
	if (isObject$4(options.datetimeFormats)) {
		const locales$1 = Object.keys(options.datetimeFormats);
		if (locales$1.length) locales$1.forEach((locale) => {
			gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
		});
	}
	if (isObject$4(options.numberFormats)) {
		const locales$1 = Object.keys(options.numberFormats);
		if (locales$1.length) locales$1.forEach((locale) => {
			gl.mergeNumberFormat(locale, options.numberFormats[locale]);
		});
	}
}
function createTextNode(key) {
	return createVNode(Text, null, key, 0);
}
var NOOP_RETURN_ARRAY = () => [];
var NOOP_RETURN_FALSE = () => false;
var composerID = 0;
function defineCoreMissingHandler(missing) {
	return ((ctx, locale, key, type) => {
		return missing(locale, key, getCurrentInstance() || void 0, type);
	});
}
function createComposer(options = {}) {
	const { __root, __injectWithOption } = options;
	const _isGlobal = __root === void 0;
	const flatJson = options.flatJson;
	const _ref = inBrowser ? ref : shallowRef;
	let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
	const _locale = _ref(__root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE);
	const _fallbackLocale = _ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
	const _messages = _ref(getLocaleMessages(_locale.value, options));
	const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
	const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
	let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
	let _fallbackFormat = !!options.fallbackFormat;
	let _missing = isFunction$2(options.missing) ? options.missing : null;
	let _runtimeMissing = isFunction$2(options.missing) ? defineCoreMissingHandler(options.missing) : null;
	let _postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : null;
	let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	let _escapeParameter = !!options.escapeParameter;
	const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
	let _pluralRules = options.pluralRules || __root && __root.pluralRules;
	let _context;
	const getCoreContext = () => {
		_isGlobal && setFallbackContext(null);
		const ctxOptions = {
			version: VERSION,
			locale: _locale.value,
			fallbackLocale: _fallbackLocale.value,
			messages: _messages.value,
			modifiers: _modifiers,
			pluralRules: _pluralRules,
			missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
			missingWarn: _missingWarn,
			fallbackWarn: _fallbackWarn,
			fallbackFormat: _fallbackFormat,
			unresolving: true,
			postTranslation: _postTranslation === null ? void 0 : _postTranslation,
			warnHtmlMessage: _warnHtmlMessage,
			escapeParameter: _escapeParameter,
			messageResolver: options.messageResolver,
			messageCompiler: options.messageCompiler,
			__meta: { framework: "vue" }
		};
		ctxOptions.datetimeFormats = _datetimeFormats.value;
		ctxOptions.numberFormats = _numberFormats.value;
		ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
		ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
		const ctx = createCoreContext(ctxOptions);
		_isGlobal && setFallbackContext(ctx);
		return ctx;
	};
	_context = getCoreContext();
	updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
	function trackReactivityValues() {
		return [
			_locale.value,
			_fallbackLocale.value,
			_messages.value,
			_datetimeFormats.value,
			_numberFormats.value
		];
	}
	const locale = computed({
		get: () => _locale.value,
		set: (val) => {
			_context.locale = val;
			_locale.value = val;
		}
	});
	const fallbackLocale = computed({
		get: () => _fallbackLocale.value,
		set: (val) => {
			_context.fallbackLocale = val;
			_fallbackLocale.value = val;
			updateFallbackLocale(_context, _locale.value, val);
		}
	});
	const messages = computed(() => _messages.value);
	const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
	const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
	function getPostTranslationHandler() {
		return isFunction$2(_postTranslation) ? _postTranslation : null;
	}
	function setPostTranslationHandler(handler) {
		_postTranslation = handler;
		_context.postTranslation = handler;
	}
	function getMissingHandler() {
		return _missing;
	}
	function setMissingHandler(handler) {
		if (handler !== null) _runtimeMissing = defineCoreMissingHandler(handler);
		_missing = handler;
		_context.missing = _runtimeMissing;
	}
	const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
		trackReactivityValues();
		let ret;
		try {
			if (__INTLIFY_PROD_DEVTOOLS__);
			if (!_isGlobal) _context.fallbackContext = __root ? getFallbackContext() : void 0;
			ret = fn(_context);
		} finally {
			if (__INTLIFY_PROD_DEVTOOLS__);
			if (!_isGlobal) _context.fallbackContext = void 0;
		}
		if (warnType !== "translate exists" && isNumber(ret) && ret === -1 || warnType === "translate exists" && !ret) {
			const [key, arg2] = argumentParser();
			return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
		} else if (successCondition(ret)) return ret;
		else
 /* istanbul ignore next */
		throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
	};
	function t(...args) {
		return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root$1) => Reflect.apply(root$1.t, root$1, [...args]), (key) => key, (val) => isString(val));
	}
	function rt(...args) {
		const [arg1, arg2, arg3] = args;
		if (arg3 && !isObject$4(arg3)) throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
		return t(...[
			arg1,
			arg2,
			assign({ resolvedMessage: true }, arg3 || {})
		]);
	}
	function d(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root$1) => Reflect.apply(root$1.d, root$1, [...args]), () => "", (val) => isString(val) || isArray$1(val));
	}
	function n(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root$1) => Reflect.apply(root$1.n, root$1, [...args]), () => "", (val) => isString(val) || isArray$1(val));
	}
	function normalize$1(values) {
		return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
	}
	const interpolate = (val) => val;
	const processor = {
		normalize: normalize$1,
		interpolate,
		type: "vnode"
	};
	function translateVNode(...args) {
		return wrapWithDeps((context) => {
			let ret;
			const _context$1 = context;
			try {
				_context$1.processor = processor;
				ret = Reflect.apply(translate, null, [_context$1, ...args]);
			} finally {
				_context$1.processor = null;
			}
			return ret;
		}, () => parseTranslateArgs(...args), "translate", (root$1) => root$1[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray$1(val));
	}
	function numberParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root$1) => root$1[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray$1(val));
	}
	function datetimeParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root$1) => root$1[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray$1(val));
	}
	function setPluralRules(rules) {
		_pluralRules = rules;
		_context.pluralRules = _pluralRules;
	}
	function te(key, locale$1) {
		return wrapWithDeps(() => {
			if (!key) return false;
			const message = getLocaleMessage(isString(locale$1) ? locale$1 : _locale.value);
			const resolved = _context.messageResolver(message, key);
			return isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved);
		}, () => [key], "translate exists", (root$1) => {
			return Reflect.apply(root$1.te, root$1, [key, locale$1]);
		}, NOOP_RETURN_FALSE, (val) => isBoolean(val));
	}
	function resolveMessages(key) {
		let messages$1 = null;
		const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
		for (let i = 0; i < locales.length; i++) {
			const targetLocaleMessages = _messages.value[locales[i]] || {};
			const messageValue = _context.messageResolver(targetLocaleMessages, key);
			if (messageValue != null) {
				messages$1 = messageValue;
				break;
			}
		}
		return messages$1;
	}
	function tm(key) {
		const messages$1 = resolveMessages(key);
		return messages$1 != null ? messages$1 : __root ? __root.tm(key) || {} : {};
	}
	function getLocaleMessage(locale$1) {
		return _messages.value[locale$1] || {};
	}
	function setLocaleMessage(locale$1, message) {
		if (flatJson) {
			const _message = { [locale$1]: message };
			for (const key in _message) if (hasOwn$1(_message, key)) handleFlatJson(_message[key]);
			message = _message[locale$1];
		}
		_messages.value[locale$1] = message;
		_context.messages = _messages.value;
	}
	function mergeLocaleMessage(locale$1, message) {
		_messages.value[locale$1] = _messages.value[locale$1] || {};
		const _message = { [locale$1]: message };
		if (flatJson) {
			for (const key in _message) if (hasOwn$1(_message, key)) handleFlatJson(_message[key]);
		}
		message = _message[locale$1];
		deepCopy(message, _messages.value[locale$1]);
		_context.messages = _messages.value;
	}
	function getDateTimeFormat(locale$1) {
		return _datetimeFormats.value[locale$1] || {};
	}
	function setDateTimeFormat(locale$1, format$2) {
		_datetimeFormats.value[locale$1] = format$2;
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale$1, format$2);
	}
	function mergeDateTimeFormat(locale$1, format$2) {
		_datetimeFormats.value[locale$1] = assign(_datetimeFormats.value[locale$1] || {}, format$2);
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale$1, format$2);
	}
	function getNumberFormat(locale$1) {
		return _numberFormats.value[locale$1] || {};
	}
	function setNumberFormat(locale$1, format$2) {
		_numberFormats.value[locale$1] = format$2;
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale$1, format$2);
	}
	function mergeNumberFormat(locale$1, format$2) {
		_numberFormats.value[locale$1] = assign(_numberFormats.value[locale$1] || {}, format$2);
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale$1, format$2);
	}
	composerID++;
	if (__root && inBrowser) {
		watch(__root.locale, (val) => {
			if (_inheritLocale) {
				_locale.value = val;
				_context.locale = val;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		});
		watch(__root.fallbackLocale, (val) => {
			if (_inheritLocale) {
				_fallbackLocale.value = val;
				_context.fallbackLocale = val;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		});
	}
	const composer = {
		id: composerID,
		locale,
		fallbackLocale,
		get inheritLocale() {
			return _inheritLocale;
		},
		set inheritLocale(val) {
			_inheritLocale = val;
			if (val && __root) {
				_locale.value = __root.locale.value;
				_fallbackLocale.value = __root.fallbackLocale.value;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		},
		get availableLocales() {
			return Object.keys(_messages.value).sort();
		},
		messages,
		get modifiers() {
			return _modifiers;
		},
		get pluralRules() {
			return _pluralRules || {};
		},
		get isGlobal() {
			return _isGlobal;
		},
		get missingWarn() {
			return _missingWarn;
		},
		set missingWarn(val) {
			_missingWarn = val;
			_context.missingWarn = _missingWarn;
		},
		get fallbackWarn() {
			return _fallbackWarn;
		},
		set fallbackWarn(val) {
			_fallbackWarn = val;
			_context.fallbackWarn = _fallbackWarn;
		},
		get fallbackRoot() {
			return _fallbackRoot;
		},
		set fallbackRoot(val) {
			_fallbackRoot = val;
		},
		get fallbackFormat() {
			return _fallbackFormat;
		},
		set fallbackFormat(val) {
			_fallbackFormat = val;
			_context.fallbackFormat = _fallbackFormat;
		},
		get warnHtmlMessage() {
			return _warnHtmlMessage;
		},
		set warnHtmlMessage(val) {
			_warnHtmlMessage = val;
			_context.warnHtmlMessage = val;
		},
		get escapeParameter() {
			return _escapeParameter;
		},
		set escapeParameter(val) {
			_escapeParameter = val;
			_context.escapeParameter = val;
		},
		t,
		getLocaleMessage,
		setLocaleMessage,
		mergeLocaleMessage,
		getPostTranslationHandler,
		setPostTranslationHandler,
		getMissingHandler,
		setMissingHandler,
		[SetPluralRulesSymbol]: setPluralRules
	};
	composer.datetimeFormats = datetimeFormats;
	composer.numberFormats = numberFormats;
	composer.rt = rt;
	composer.te = te;
	composer.tm = tm;
	composer.d = d;
	composer.n = n;
	composer.getDateTimeFormat = getDateTimeFormat;
	composer.setDateTimeFormat = setDateTimeFormat;
	composer.mergeDateTimeFormat = mergeDateTimeFormat;
	composer.getNumberFormat = getNumberFormat;
	composer.setNumberFormat = setNumberFormat;
	composer.mergeNumberFormat = mergeNumberFormat;
	composer[InejctWithOptionSymbol] = __injectWithOption;
	composer[TranslateVNodeSymbol] = translateVNode;
	composer[DatetimePartsSymbol] = datetimeParts;
	composer[NumberPartsSymbol] = numberParts;
	return composer;
}
function convertComposerOptions(options) {
	const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
	const fallbackLocale = isString(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
	const missing = isFunction$2(options.missing) ? options.missing : void 0;
	const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
	const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
	const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
	const fallbackFormat = !!options.formatFallbackMessages;
	const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
	const pluralizationRules = options.pluralizationRules;
	const postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : void 0;
	const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
	const escapeParameter = !!options.escapeParameterHtml;
	const inheritLocale = isBoolean(options.sync) ? options.sync : true;
	let messages = options.messages;
	if (isPlainObject(options.sharedMessages)) {
		const sharedMessages = options.sharedMessages;
		messages = Object.keys(sharedMessages).reduce((messages$1, locale$1) => {
			assign(messages$1[locale$1] || (messages$1[locale$1] = {}), sharedMessages[locale$1]);
			return messages$1;
		}, messages || {});
	}
	const { __i18n, __root, __injectWithOption } = options;
	const datetimeFormats = options.datetimeFormats;
	const numberFormats = options.numberFormats;
	const flatJson = options.flatJson;
	return {
		locale,
		fallbackLocale,
		messages,
		flatJson,
		datetimeFormats,
		numberFormats,
		missing,
		missingWarn,
		fallbackWarn,
		fallbackRoot,
		fallbackFormat,
		modifiers,
		pluralRules: pluralizationRules,
		postTranslation,
		warnHtmlMessage,
		escapeParameter,
		messageResolver: options.messageResolver,
		inheritLocale,
		__i18n,
		__root,
		__injectWithOption
	};
}
function createVueI18n(options = {}) {
	const composer = createComposer(convertComposerOptions(options));
	const { __extender } = options;
	const vueI18n = {
		id: composer.id,
		get locale() {
			return composer.locale.value;
		},
		set locale(val) {
			composer.locale.value = val;
		},
		get fallbackLocale() {
			return composer.fallbackLocale.value;
		},
		set fallbackLocale(val) {
			composer.fallbackLocale.value = val;
		},
		get messages() {
			return composer.messages.value;
		},
		get datetimeFormats() {
			return composer.datetimeFormats.value;
		},
		get numberFormats() {
			return composer.numberFormats.value;
		},
		get availableLocales() {
			return composer.availableLocales;
		},
		get missing() {
			return composer.getMissingHandler();
		},
		set missing(handler) {
			composer.setMissingHandler(handler);
		},
		get silentTranslationWarn() {
			return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
		},
		set silentTranslationWarn(val) {
			composer.missingWarn = isBoolean(val) ? !val : val;
		},
		get silentFallbackWarn() {
			return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
		},
		set silentFallbackWarn(val) {
			composer.fallbackWarn = isBoolean(val) ? !val : val;
		},
		get modifiers() {
			return composer.modifiers;
		},
		get formatFallbackMessages() {
			return composer.fallbackFormat;
		},
		set formatFallbackMessages(val) {
			composer.fallbackFormat = val;
		},
		get postTranslation() {
			return composer.getPostTranslationHandler();
		},
		set postTranslation(handler) {
			composer.setPostTranslationHandler(handler);
		},
		get sync() {
			return composer.inheritLocale;
		},
		set sync(val) {
			composer.inheritLocale = val;
		},
		get warnHtmlInMessage() {
			return composer.warnHtmlMessage ? "warn" : "off";
		},
		set warnHtmlInMessage(val) {
			composer.warnHtmlMessage = val !== "off";
		},
		get escapeParameterHtml() {
			return composer.escapeParameter;
		},
		set escapeParameterHtml(val) {
			composer.escapeParameter = val;
		},
		get pluralizationRules() {
			return composer.pluralRules || {};
		},
		__composer: composer,
		t(...args) {
			return Reflect.apply(composer.t, composer, [...args]);
		},
		rt(...args) {
			return Reflect.apply(composer.rt, composer, [...args]);
		},
		te(key, locale) {
			return composer.te(key, locale);
		},
		tm(key) {
			return composer.tm(key);
		},
		getLocaleMessage(locale) {
			return composer.getLocaleMessage(locale);
		},
		setLocaleMessage(locale, message) {
			composer.setLocaleMessage(locale, message);
		},
		mergeLocaleMessage(locale, message) {
			composer.mergeLocaleMessage(locale, message);
		},
		d(...args) {
			return Reflect.apply(composer.d, composer, [...args]);
		},
		getDateTimeFormat(locale) {
			return composer.getDateTimeFormat(locale);
		},
		setDateTimeFormat(locale, format$2) {
			composer.setDateTimeFormat(locale, format$2);
		},
		mergeDateTimeFormat(locale, format$2) {
			composer.mergeDateTimeFormat(locale, format$2);
		},
		n(...args) {
			return Reflect.apply(composer.n, composer, [...args]);
		},
		getNumberFormat(locale) {
			return composer.getNumberFormat(locale);
		},
		setNumberFormat(locale, format$2) {
			composer.setNumberFormat(locale, format$2);
		},
		mergeNumberFormat(locale, format$2) {
			composer.mergeNumberFormat(locale, format$2);
		}
	};
	vueI18n.__extender = __extender;
	return vueI18n;
}
function defineMixin(vuei18n, composer, i18n$1) {
	return {
		beforeCreate() {
			const instance = getCurrentInstance();
			/* istanbul ignore if */
			if (!instance) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
			const options = this.$options;
			if (options.i18n) {
				const optionsI18n = options.i18n;
				if (options.__i18n) optionsI18n.__i18n = options.__i18n;
				optionsI18n.__root = composer;
				if (this === this.$root) this.$i18n = mergeToGlobal(vuei18n, optionsI18n);
				else {
					optionsI18n.__injectWithOption = true;
					optionsI18n.__extender = i18n$1.__vueI18nExtend;
					this.$i18n = createVueI18n(optionsI18n);
					const _vueI18n = this.$i18n;
					if (_vueI18n.__extender) _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
				}
			} else if (options.__i18n) if (this === this.$root) this.$i18n = mergeToGlobal(vuei18n, options);
			else {
				this.$i18n = createVueI18n({
					__i18n: options.__i18n,
					__injectWithOption: true,
					__extender: i18n$1.__vueI18nExtend,
					__root: composer
				});
				const _vueI18n = this.$i18n;
				if (_vueI18n.__extender) _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
			}
			else this.$i18n = vuei18n;
			if (options.__i18nGlobal) adjustI18nResources(composer, options, options);
			this.$t = (...args) => this.$i18n.t(...args);
			this.$rt = (...args) => this.$i18n.rt(...args);
			this.$te = (key, locale) => this.$i18n.te(key, locale);
			this.$d = (...args) => this.$i18n.d(...args);
			this.$n = (...args) => this.$i18n.n(...args);
			this.$tm = (key) => this.$i18n.tm(key);
			i18n$1.__setInstance(instance, this.$i18n);
		},
		mounted() {},
		unmounted() {
			const instance = getCurrentInstance();
			/* istanbul ignore if */
			if (!instance) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
			const _vueI18n = this.$i18n;
			delete this.$t;
			delete this.$rt;
			delete this.$te;
			delete this.$d;
			delete this.$n;
			delete this.$tm;
			if (_vueI18n.__disposer) {
				_vueI18n.__disposer();
				delete _vueI18n.__disposer;
				delete _vueI18n.__extender;
			}
			i18n$1.__deleteInstance(instance);
			delete this.$i18n;
		}
	};
}
function mergeToGlobal(g, options) {
	g.locale = options.locale || g.locale;
	g.fallbackLocale = options.fallbackLocale || g.fallbackLocale;
	g.missing = options.missing || g.missing;
	g.silentTranslationWarn = options.silentTranslationWarn || g.silentFallbackWarn;
	g.silentFallbackWarn = options.silentFallbackWarn || g.silentFallbackWarn;
	g.formatFallbackMessages = options.formatFallbackMessages || g.formatFallbackMessages;
	g.postTranslation = options.postTranslation || g.postTranslation;
	g.warnHtmlInMessage = options.warnHtmlInMessage || g.warnHtmlInMessage;
	g.escapeParameterHtml = options.escapeParameterHtml || g.escapeParameterHtml;
	g.sync = options.sync || g.sync;
	g.__composer[SetPluralRulesSymbol](options.pluralizationRules || g.pluralizationRules);
	const messages = getLocaleMessages(g.locale, {
		messages: options.messages,
		__i18n: options.__i18n
	});
	Object.keys(messages).forEach((locale) => g.mergeLocaleMessage(locale, messages[locale]));
	if (options.datetimeFormats) Object.keys(options.datetimeFormats).forEach((locale) => g.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
	if (options.numberFormats) Object.keys(options.numberFormats).forEach((locale) => g.mergeNumberFormat(locale, options.numberFormats[locale]));
	return g;
}
var baseFormatProps = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (val) => val === "parent" || val === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function getInterpolateArg({ slots }, keys) {
	if (keys.length === 1 && keys[0] === "default") return (slots.default ? slots.default() : []).reduce((slot, current) => {
		return [...slot, ...current.type === Fragment ? current.children : [current]];
	}, []);
	else return keys.reduce((arg, key) => {
		const slot = slots[key];
		if (slot) arg[key] = slot();
		return arg;
	}, create());
}
function getFragmentableTag() {
	return Fragment;
}
var Translation = /* @__PURE__ */ defineComponent({
	name: "i18n-t",
	props: assign({
		keypath: {
			type: String,
			required: true
		},
		plural: {
			type: [Number, String],
			validator: (val) => isNumber(val) || !isNaN(val)
		}
	}, baseFormatProps),
	setup(props, context) {
		const { slots, attrs } = context;
		const i18n$1 = props.i18n || useI18n$1({
			useScope: props.scope,
			__useComponent: true
		});
		return () => {
			const keys = Object.keys(slots).filter((key) => key[0] !== "_");
			const options = create();
			if (props.locale) options.locale = props.locale;
			if (props.plural !== void 0) options.plural = isString(props.plural) ? +props.plural : props.plural;
			const arg = getInterpolateArg(context, keys);
			const children = i18n$1[TranslateVNodeSymbol](props.keypath, arg, options);
			const assignedAttrs = assign(create(), attrs);
			return h(isString(props.tag) || isObject$4(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
		};
	}
});
var I18nT = Translation;
function isVNode(target) {
	return isArray$1(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
	const { slots, attrs } = context;
	return () => {
		const options = { part: true };
		let overrides = create();
		if (props.locale) options.locale = props.locale;
		if (isString(props.format)) options.key = props.format;
		else if (isObject$4(props.format)) {
			if (isString(props.format.key)) options.key = props.format.key;
			overrides = Object.keys(props.format).reduce((options$1, prop) => {
				return slotKeys.includes(prop) ? assign(create(), options$1, { [prop]: props.format[prop] }) : options$1;
			}, create());
		}
		const parts = partFormatter(...[
			props.value,
			options,
			overrides
		]);
		let children = [options.key];
		if (isArray$1(parts)) children = parts.map((part, index) => {
			const slot = slots[part.type];
			const node = slot ? slot({
				[part.type]: part.value,
				index,
				parts
			}) : [part.value];
			if (isVNode(node)) node[0].key = `${part.type}-${index}`;
			return node;
		});
		else if (isString(parts)) children = [parts];
		const assignedAttrs = assign(create(), attrs);
		return h(isString(props.tag) || isObject$4(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
	};
}
var NumberFormat = /* @__PURE__ */ defineComponent({
	name: "i18n-n",
	props: assign({
		value: {
			type: Number,
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n$1 = props.i18n || useI18n$1({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n$1[NumberPartsSymbol](...args));
	}
});
function getComposer$1(i18n$1, instance) {
	const i18nInternal = i18n$1;
	if (i18n$1.mode === "composition") return i18nInternal.__getInstance(instance) || i18n$1.global;
	else {
		const vueI18n = i18nInternal.__getInstance(instance);
		return vueI18n != null ? vueI18n.__composer : i18n$1.global.__composer;
	}
}
function vTDirective(i18n$1) {
	const _process = (binding) => {
		const { instance, value } = binding;
		/* istanbul ignore if */
		if (!instance || !instance.$) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const composer = getComposer$1(i18n$1, instance.$);
		const parsedValue = parseValue(value);
		return [Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]), composer];
	};
	const register = (el, binding) => {
		const [textContent, composer] = _process(binding);
		if (inBrowser && i18n$1.global === composer) el.__i18nWatcher = watch(composer.locale, () => {
			binding.instance && binding.instance.$forceUpdate();
		});
		el.__composer = composer;
		el.textContent = textContent;
	};
	const unregister = (el) => {
		if (inBrowser && el.__i18nWatcher) {
			el.__i18nWatcher();
			el.__i18nWatcher = void 0;
			delete el.__i18nWatcher;
		}
		if (el.__composer) {
			el.__composer = void 0;
			delete el.__composer;
		}
	};
	const update = (el, { value }) => {
		if (el.__composer) {
			const composer = el.__composer;
			const parsedValue = parseValue(value);
			el.textContent = Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]);
		}
	};
	const getSSRProps = (binding) => {
		const [textContent] = _process(binding);
		return { textContent };
	};
	return {
		created: register,
		unmounted: unregister,
		beforeUpdate: update,
		getSSRProps
	};
}
function parseValue(value) {
	if (isString(value)) return { path: value };
	else if (isPlainObject(value)) {
		if (!("path" in value)) throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
		return value;
	} else throw createI18nError(I18nErrorCodes.INVALID_VALUE);
}
function makeParams(value) {
	const { path, locale, args, choice, plural } = value;
	const options = {};
	const named = args || {};
	if (isString(locale)) options.locale = locale;
	if (isNumber(choice)) options.plural = choice;
	if (isNumber(plural)) options.plural = plural;
	return [
		path,
		named,
		options
	];
}
function apply(app, i18n$1, ...options) {
	const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
	if (isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true) {
		[Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
		[NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
		[DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
	}
	app.directive("t", vTDirective(i18n$1));
}
var I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}) {
	const __legacyMode = __VUE_I18N_LEGACY_API__ && isBoolean(options.legacy) ? options.legacy : __VUE_I18N_LEGACY_API__;
	const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
	const __instances = /* @__PURE__ */ new Map();
	const [globalScope, __global] = createGlobal(options, __legacyMode);
	const symbol = /* @__PURE__ */ makeSymbol("");
	function __getInstance(component) {
		return __instances.get(component) || null;
	}
	function __setInstance(component, instance) {
		__instances.set(component, instance);
	}
	function __deleteInstance(component) {
		__instances.delete(component);
	}
	const i18n$1 = {
		get mode() {
			return __VUE_I18N_LEGACY_API__ && __legacyMode ? "legacy" : "composition";
		},
		async install(app, ...options$1) {
			app.__VUE_I18N_SYMBOL__ = symbol;
			app.provide(app.__VUE_I18N_SYMBOL__, i18n$1);
			if (isPlainObject(options$1[0])) {
				const opts = options$1[0];
				i18n$1.__composerExtend = opts.__composerExtend;
				i18n$1.__vueI18nExtend = opts.__vueI18nExtend;
			}
			let globalReleaseHandler = null;
			if (!__legacyMode && __globalInjection) globalReleaseHandler = injectGlobalFields(app, i18n$1.global);
			if (__VUE_I18N_FULL_INSTALL__) apply(app, i18n$1, ...options$1);
			if (__VUE_I18N_LEGACY_API__ && __legacyMode) app.mixin(defineMixin(__global, __global.__composer, i18n$1));
			const unmountApp = app.unmount;
			app.unmount = () => {
				globalReleaseHandler && globalReleaseHandler();
				i18n$1.dispose();
				unmountApp();
			};
		},
		get global() {
			return __global;
		},
		dispose() {
			globalScope.stop();
		},
		__instances,
		__getInstance,
		__setInstance,
		__deleteInstance
	};
	return i18n$1;
}
function useI18n$1(options = {}) {
	const instance = getCurrentInstance();
	if (instance == null) throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
	if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
	const i18n$1 = getI18nInstance(instance);
	const gl = getGlobalComposer(i18n$1);
	const componentOptions = getComponentOptions(instance);
	const scope = getScope(options, componentOptions);
	if (scope === "global") {
		adjustI18nResources(gl, options, componentOptions);
		return gl;
	}
	if (scope === "parent") {
		let composer$1 = getComposer(i18n$1, instance, options.__useComponent);
		if (composer$1 == null) composer$1 = gl;
		return composer$1;
	}
	const i18nInternal = i18n$1;
	let composer = i18nInternal.__getInstance(instance);
	if (composer == null) {
		const composerOptions = assign({}, options);
		if ("__i18n" in componentOptions) composerOptions.__i18n = componentOptions.__i18n;
		if (gl) composerOptions.__root = gl;
		composer = createComposer(composerOptions);
		if (i18nInternal.__composerExtend) composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
		setupLifeCycle(i18nInternal, instance, composer);
		i18nInternal.__setInstance(instance, composer);
	}
	return composer;
}
function createGlobal(options, legacyMode) {
	const scope = effectScope();
	const obj = __VUE_I18N_LEGACY_API__ && legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
	if (obj == null) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
	return [scope, obj];
}
function getI18nInstance(instance) {
	const i18n$1 = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
	/* istanbul ignore if */
	if (!i18n$1) throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
	return i18n$1;
}
function getScope(options, componentOptions) {
	return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n$1) {
	return i18n$1.mode === "composition" ? i18n$1.global : i18n$1.global.__composer;
}
function getComposer(i18n$1, target, useComponent = false) {
	let composer = null;
	const root$1 = target.root;
	let current = getParentComponentInstance(target, useComponent);
	while (current != null) {
		const i18nInternal = i18n$1;
		if (i18n$1.mode === "composition") composer = i18nInternal.__getInstance(current);
		else if (__VUE_I18N_LEGACY_API__) {
			const vueI18n = i18nInternal.__getInstance(current);
			if (vueI18n != null) {
				composer = vueI18n.__composer;
				if (useComponent && composer && !composer[InejctWithOptionSymbol]) composer = null;
			}
		}
		if (composer != null) break;
		if (root$1 === current) break;
		current = current.parent;
	}
	return composer;
}
function getParentComponentInstance(target, useComponent = false) {
	if (target == null) return null;
	return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
function setupLifeCycle(i18n$1, target, composer) {
	onMounted(() => {}, target);
	onUnmounted(() => {
		const _composer = composer;
		i18n$1.__deleteInstance(target);
		const dispose = _composer[DisposeSymbol];
		if (dispose) {
			dispose();
			delete _composer[DisposeSymbol];
		}
	}, target);
}
var globalExportProps = [
	"locale",
	"fallbackLocale",
	"availableLocales"
];
var globalExportMethods = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function injectGlobalFields(app, composer) {
	const i18n$1 = Object.create(null);
	globalExportProps.forEach((prop) => {
		const desc = Object.getOwnPropertyDescriptor(composer, prop);
		if (!desc) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const wrap = isRef(desc.value) ? {
			get() {
				return desc.value.value;
			},
			set(val) {
				desc.value.value = val;
			}
		} : { get() {
			return desc.get && desc.get();
		} };
		Object.defineProperty(i18n$1, prop, wrap);
	});
	app.config.globalProperties.$i18n = i18n$1;
	globalExportMethods.forEach((method) => {
		const desc = Object.getOwnPropertyDescriptor(composer, method);
		if (!desc || !desc.value) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
	});
	const dispose = () => {
		delete app.config.globalProperties.$i18n;
		globalExportMethods.forEach((method) => {
			delete app.config.globalProperties[`$${method}`];
		});
	};
	return dispose;
}
var DatetimeFormat = /* @__PURE__ */ defineComponent({
	name: "i18n-d",
	props: assign({
		value: {
			type: [Number, Date],
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n$1 = props.i18n || useI18n$1({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n$1[DatetimePartsSymbol](...args));
	}
});
initFeatureFlags();
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
if (__INTLIFY_PROD_DEVTOOLS__) {
	const target = getGlobalThis();
	target.__INTLIFY__ = true;
	setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const _reusableBaseText = {
	"cancel": "Cancel",
	"codeNodeEditor": {
		"linter": { "useJson": "Access the properties of an item under `.json`, e.g. `item.json`" },
		"completer": {
			"all": "Returns an array of the node's output items",
			"first": "Returns the first item output by the node",
			"last": "Returns the last item output by the node",
			"itemMatching": "Returns the matching item, i.e. the one used to produce the item in the current node at the specified index."
		}
	},
	"name": "Name",
	"save": "Save",
	"dismiss": "Dismiss",
	"unlimited": "Unlimited",
	"activate": "Activate",
	"user": "User",
	"enabled": "Enabled",
	"disabled": "Disabled",
	"type": "Type",
	"role": "Role",
	"roles": {
		"admin": "Admin",
		"editor": "Editor",
		"viewer": "Viewer"
	}
};
const _reusableDynamicText = {
	"readMore": "Read more",
	"learnMore": "Learn more",
	"moreInfo": "More info",
	"oauth2": {
		"clientId": "Client ID",
		"clientSecret": "Client Secret"
	}
};
const error = "Error";
const forgotPassword = "Forgot my password";
const settings = "Settings";
const startupError = "Error connecting to n8n";
var en_default = {
	_reusableBaseText,
	_reusableDynamicText,
	"generic.annotations": "Annotations",
	"generic.annotationData": "Highlighted data",
	"generic.any": "Any",
	"generic.cancel": "Cancel",
	"generic.open": "Open",
	"generic.add": "Add",
	"generic.close": "Close",
	"generic.clear": "Clear",
	"generic.confirm": "Confirm",
	"generic.create": "Create",
	"generic.create.workflow": "Create Workflow",
	"generic.deleteWorkflowError": "Problem deleting workflow",
	"generic.archiveWorkflowError": "Problem archiving workflow",
	"generic.unarchiveWorkflowError": "Problem unarchiving workflow",
	"generic.filtersApplied": "Filters are currently applied.",
	"generic.field": "field",
	"generic.fields": "fields",
	"generic.folderCount": "Folder | {count} Folder | {count} Folders",
	"generic.folder": "folder",
	"generic.learnMore": "Learn more",
	"generic.reset": "Reset",
	"generic.resetAllFilters": "Reset all filters",
	"generic.communityNode": "Community Node",
	"generic.communityNode.tooltip": "This is a node from our community. It's part of the {packageName} package. <a href=\"{docURL}\" target=\"_blank\" title=\"Read the n8n docs\">Learn more</a>",
	"generic.officialNode.tooltip": "This is an official node maintained by {author}",
	"generic.copy": "Copy",
	"generic.copied": "Copied",
	"generic.delete": "Delete",
	"generic.dontShowAgain": "Don't show again",
	"generic.enterprise": "Enterprise",
	"generic.executions": "Executions",
	"generic.tag_plural": "Tags",
	"generic.tag": "Tag | {count} Tags",
	"generic.tests": "Evaluations",
	"generic.optional": "optional",
	"generic.or": "or",
	"generic.clickToCopy": "Click to copy",
	"generic.copiedToClipboard": "Copied to clipboard",
	"generic.beta": "beta",
	"generic.betaProper": "Beta",
	"generic.yes": "Yes",
	"generic.no": "No",
	"generic.rating": "Rating",
	"generic.refresh": "Refresh",
	"generic.retry": "Retry",
	"generic.error": "Something went wrong",
	"generic.error.subworkflowCreationFailed": "Error creating sub-workflow",
	"generic.settings": "Settings",
	"generic.service": "the service",
	"generic.star": "Star",
	"generic.tryNow": "Try now",
	"generic.startNow": "Start now",
	"generic.dismiss": "Dismiss",
	"generic.saving": "Saving",
	"generic.name": "Name",
	"generic.unsavedWork.confirmMessage.headline": "Save changes before leaving?",
	"generic.unsavedWork.confirmMessage.message": "If you don't save, you will lose your changes.",
	"generic.unsavedWork.confirmMessage.confirmButtonText": "Save",
	"generic.unsavedWork.confirmMessage.cancelButtonText": "Leave without saving",
	"generic.upgrade": "Upgrade",
	"generic.upgradeNow": "Upgrade now",
	"generic.update": "Update",
	"generic.credential": "Credential | {count} Credential | {count} Credentials",
	"generic.credentials": "Credentials",
	"generic.workflow": "Workflow | {count} Workflow | {count} Workflows",
	"generic.workflowSaved": "Workflow changes saved",
	"generic.editor": "Editor",
	"generic.seePlans": "See plans",
	"generic.loading": "Loading",
	"generic.and": "and",
	"generic.ownedByMe": "(You)",
	"generic.moreInfo": "More info",
	"generic.next": "Next",
	"generic.pro": "Pro",
	"generic.variable_plural": "Variables",
	"generic.folders_plural": "Folders",
	"generic.variable": "Variable | {count} Variables",
	"generic.viewDocs": "View docs",
	"generic.workflows": "Workflows",
	"generic.rename": "Rename",
	"generic.missing.permissions": "Missing permissions to perform this action",
	"generic.shortcutHint": "Or press",
	"generic.unknownError": "An unknown error occurred",
	"generic.upgradeToEnterprise": "Upgrade to Enterprise",
	"generic.never": "Never",
	"generic.list.clearSelection": "Clear selection",
	"generic.list.selected": "{count} row selected | {count} rows selected",
	"generic.project": "Project",
	"generic.your": "Your",
	"generic.apiKey": "API Key",
	"about.aboutN8n": "About n8n",
	"about.close": "Close",
	"about.license": "License",
	"about.n8nLicense": "Sustainable Use License + n8n Enterprise License",
	"about.n8nVersion": "n8n Version",
	"about.sourceCode": "Source Code",
	"about.instanceID": "Instance ID",
	"about.debug.title": "Debug",
	"about.debug.message": "Copy debug information",
	"about.debug.toast.title": "Debug info",
	"about.debug.toast.message": "Copied debug info to clipboard",
	"about.thirdPartyLicenses": "Third-Party Licenses",
	"about.thirdPartyLicensesLink": "View all third-party licenses",
	"about.thirdPartyLicenses.downloadError": "Failed to download third-party licenses file",
	"askAi.dialog.title": "'Ask AI' is almost ready",
	"askAi.dialog.body": "We’re still applying the finishing touches. Soon, you will be able to <strong>automatically generate code from simple text prompts</strong>. Join the waitlist to get early access to this feature.",
	"askAi.dialog.signup": "Join Waitlist",
	"activationModal.butYouCanSeeThem": "but you can see them in the",
	"activationModal.executionList": "execution list",
	"activationModal.gotIt": "Got it",
	"activationModal.ifYouChooseTo": "if you choose to",
	"activationModal.saveExecutions": "save executions.",
	"activationModal.theseExecutionsWillNotShowUp": "These executions will not show up immediately in the editor,",
	"activationModal.workflowActivated": "Workflow activated",
	"activationModal.yourTriggerWillNowFire": "Your trigger will now fire production executions automatically.",
	"activationModal.yourTriggersWillNowFire": "Your triggers will now fire production executions automatically.",
	"activationModal.yourWorkflowWillNowListenForEvents": "Your workflow will now listen for events from {serviceName} and trigger executions.",
	"activationModal.yourWorkflowWillNowRegularlyCheck": "Your workflow will now regularly check {serviceName} for events and trigger executions for them.",
	"annotationTagsManager.manageTags": "Manage execution tags",
	"annotationTagsView.usage": "Usage (all workflows)",
	"annotationTagsView.inUse": "{count} execution | {count} executions",
	"auth.changePassword": "Change password",
	"auth.changePassword.currentPassword": "Current password",
	"auth.changePassword.mfaCode": "Two-factor code",
	"auth.changePassword.error": "Problem changing the password",
	"auth.changePassword.missingTokenError": "Missing token",
	"auth.changePassword.missingUserIdError": "Missing user ID",
	"auth.changePassword.passwordUpdated": "Password updated",
	"auth.changePassword.passwordUpdatedMessage": "You can now sign in with your new password",
	"auth.changePassword.passwordsMustMatchError": "Passwords must match",
	"auth.changePassword.reenterNewPassword": "Re-enter new password",
	"auth.changePassword.tokenValidationError": "Invalid password-reset token",
	"auth.confirmPassword": "Confirm password",
	"auth.confirmPassword.currentPassword": "Current password",
	"auth.confirmPassword.confirmPasswordToChangeEmail": "Please confirm your password in order to change your email address.",
	"auth.defaultPasswordRequirements": "8+ characters, at least 1 number and 1 capital letter",
	"auth.validation.missingParameters": "Missing token or user id",
	"auth.email": "Email",
	"auth.firstName": "First Name",
	"auth.lastName": "Last Name",
	"auth.newPassword": "New password",
	"auth.password": "Password",
	"auth.role": "Role",
	"auth.roles.default": "Default",
	"auth.roles.member": "Member",
	"auth.roles.admin": "@:_reusableBaseText.roles.admin",
	"auth.roles.owner": "Owner",
	"auth.agreement.label": "I want to receive security and product updates",
	"auth.setup.next": "Next",
	"auth.setup.settingUpOwnerError": "Problem setting up owner",
	"auth.setup.setupOwner": "Set up owner account",
	"auth.signin": "Sign in",
	"auth.signin.error": "Problem logging in",
	"auth.signout": "Sign out",
	"auth.signout.error": "Could not sign out",
	"auth.signup.finishAccountSetup": "Finish account setup",
	"auth.signup.missingTokenError": "Missing token",
	"auth.signup.setupYourAccount": "Set up your account",
	"auth.signup.setupYourAccountError": "Problem setting up your account",
	"auth.signup.tokenValidationError": "Issue validating invite token",
	"aiAssistant.name": "n8n AI",
	"aiAssistant.tabs.ask": "Ask",
	"aiAssistant.tabs.build": "Build",
	"aiAssistant.builder.mode": "AI Builder",
	"aiAssistant.builder.placeholder": "Ask n8n to build...",
	"aiAssistant.builder.assistantPlaceholder": "What would you like to modify or add?",
	"aiAssistant.builder.characterLimit": "You've reached the { limit } character limit",
	"aiAssistant.builder.generateNew": "Generate new workflow",
	"aiAssistant.builder.newWorkflowNotice": "The created workflow will be added to the editor",
	"aiAssistant.builder.feedbackPrompt": "Is this workflow helpful?",
	"aiAssistant.builder.invalidPrompt": "Prompt validation failed. Please try again with a clearer description of your workflow requirements and supported integrations.",
	"aiAssistant.builder.workflowParsingError.title": "Unable to insert workflow",
	"aiAssistant.builder.workflowParsingError.content": "The workflow returned by AI could not be parsed. Please try again.",
	"aiAssistant.builder.canvasPrompt.title": "What would you like to automate?",
	"aiAssistant.builder.canvasPrompt.confirmTitle": "Replace current prompt?",
	"aiAssistant.builder.canvasPrompt.confirmMessage": "This will replace your current prompt. Are you sure?",
	"aiAssistant.builder.canvasPrompt.confirmButton": "Replace",
	"aiAssistant.builder.canvasPrompt.cancelButton": "Cancel",
	"aiAssistant.builder.canvasPrompt.startManually.title": "Start manually",
	"aiAssistant.builder.canvasPrompt.startManually.subTitle": "Add the first node",
	"aiAssistant.builder.canvasPrompt.buildWithAI": "Build with AI",
	"aiAssistant.builder.streamAbortedMessage": "Task aborted",
	"aiAssistant.builder.executeMessage.description": "Complete these steps before executing your workflow:",
	"aiAssistant.builder.executeMessage.noIssues": "Your workflow is ready to be executed",
	"aiAssistant.builder.executeMessage.validationTooltip": "Complete the steps above before executing",
	"aiAssistant.builder.executeMessage.execute": "Execute and refine",
	"aiAssistant.builder.executeMessage.noExecutionData": "Workflow execution could not be started. Please try again.",
	"aiAssistant.builder.executeMessage.executionSuccess": "Workflow executed successfully.",
	"aiAssistant.builder.executeMessage.executionFailedOnNode": "Workflow execution failed on node \"{nodeName}\": {errorMessage}",
	"aiAssistant.builder.executeMessage.executionFailed": "Workflow execution failed: {errorMessage}",
	"aiAssistant.builder.executeMessage.fillParameter": "Update \"{label}\" parameter",
	"aiAssistant.builder.toast.title": "Send chat message to start the execution",
	"aiAssistant.builder.toast.description": "Please send a message in the chat panel to start the execution of your workflow",
	"aiAssistant.assistant": "n8n AI",
	"aiAssistant.newSessionModal.title.part1": "Start new",
	"aiAssistant.newSessionModal.title.part2": "session",
	"aiAssistant.newSessionModal.message": "You already have an active n8n AI session. Starting a new session will clear your current conversation history.",
	"aiAssistant.newSessionModal.question": "Are you sure you want to start a new session?",
	"aiAssistant.newSessionModal.confirm": "Start new session",
	"aiAssistant.serviceError.message": "Unable to connect to n8n's AI service ({message})",
	"aiAssistant.payloadTooBig.message": "Payload size is too large",
	"aiAssistant.codeUpdated.message.title": "n8n AI modified workflow",
	"aiAssistant.codeUpdated.message.body1": "Open the",
	"aiAssistant.codeUpdated.message.body2": "node to see the changes",
	"aiAssistant.thinkingSteps.analyzingError": "Analyzing the error...",
	"aiAssistant.thinkingSteps.thinking": "Thinking...",
	"aiAssistant.prompts.currentView.workflowList": "The user is currently looking at the list of workflows.",
	"aiAssistant.prompts.currentView.credentialsList": "The user is currently looking at the list of credentials.",
	"aiAssistant.prompts.currentView.executionsView": "The user is currently looking at the list of executions for the currently open workflow.",
	"aiAssistant.prompts.currentView.workflowEditor": "The user is currently looking at the current workflow in n8n editor, without any specific node selected.",
	"aiAssistant.tooltip": "n8n AI",
	"banners.confirmEmail.message.1": "To secure your account and prevent future access issues, please confirm your",
	"banners.confirmEmail.message.2": "email address.",
	"banners.confirmEmail.button": "Confirm email",
	"banners.confirmEmail.toast.success.heading": "Confirmation email sent",
	"banners.confirmEmail.toast.success.message": "Please check your inbox and click the confirmation link.",
	"banners.confirmEmail.toast.error.heading": "Problem sending confirmation email",
	"banners.confirmEmail.toast.error.message": "Please try again later.",
	"banners.nonProductionLicense.message": "This n8n instance is not licensed for production purposes.",
	"banners.trial.message": "1 day left in your n8n trial | {count} days left in your n8n trial",
	"banners.trialOver.message": "Your trial is over. Upgrade now to keep automating.",
	"banners.v1.message": "n8n has been updated to version 1, introducing some breaking changes. Please consult the <a target=\"_blank\" href=\"https://docs.n8n.io/1-0-migration-checklist\">migration guide</a> for more information.",
	"binaryDataDisplay.backToList": "Back to list",
	"binaryDataDisplay.backToOverviewPage": "Back to overview page",
	"binaryDataDisplay.noDataFoundToDisplay": "No data found to display",
	"binaryDataDisplay.yourBrowserDoesNotSupport": "Your browser does not support the video element. Kindly update it to latest version.",
	"chat.hide": "Hide chat",
	"chat.open": "Open chat",
	"chat.window.title": "Chat",
	"chat.window.logs": "Latest Logs",
	"chat.window.logsFromNode": "from {nodeName} node",
	"chat.window.noChatNode": "No Chat Node",
	"chat.window.noExecution": "Nothing got executed yet",
	"chat.window.chat.placeholder": "Type message, or press ‘up’ for prev one",
	"chat.window.chat.placeholderPristine": "Type a message",
	"chat.window.chat.sendButtonText": "Send",
	"chat.window.chat.provideMessage": "Please provide a message",
	"chat.window.chat.emptyChatMessage": "Empty chat message",
	"chat.window.chat.emptyChatMessage.v2": "Send a message below to trigger the chat workflow",
	"chat.window.chat.chatMessageOptions.reuseMessage": "Reuse Message",
	"chat.window.chat.chatMessageOptions.repostMessage": "Repost Message",
	"chat.window.chat.chatMessageOptions.executionId": "Execution ID",
	"chat.window.chat.unpinAndExecute.description": "Sending the message overwrites the pinned chat node data.",
	"chat.window.chat.unpinAndExecute.title": "Unpin chat output data?",
	"chat.window.chat.unpinAndExecute.confirm": "Unpin and send",
	"chat.window.chat.unpinAndExecute.cancel": "Cancel",
	"chat.window.chat.response.empty": "[No response. Make sure the last executed node outputs the content to display here]",
	"chat.window.session.title": "Session",
	"chat.window.session.id": "Session: {id}",
	"chat.window.session.id.copy": "(click to copy)",
	"chat.window.session.reset": "Reset",
	"chat.window.session.resetSession": "Reset chat session",
	"chatEmbed.infoTip.description": "Add chat to external applications using the n8n chat package.",
	"chatEmbed.infoTip.link": "More info",
	"chatEmbed.title": "Embed Chat in your website",
	"chatEmbed.close": "Close",
	"chatEmbed.install": "First, install the n8n chat package:",
	"chatEmbed.paste.cdn": "Paste the following code anywhere in the {code} tag of your HTML file.",
	"chatEmbed.paste.cdn.file": "<body>",
	"chatEmbed.paste.vue": "Next, paste the following code in your {code} file.",
	"chatEmbed.paste.vue.file": "App.vue",
	"chatEmbed.paste.react": "Next, paste the following code in your {code} file.",
	"chatEmbed.paste.react.file": "App.ts",
	"chatEmbed.paste.other": "Next, paste the following code in your {code} file.",
	"chatEmbed.paste.other.file": "main.ts",
	"chatEmbed.packageInfo.description": "The n8n Chat widget can be easily customized to fit your needs.",
	"chatEmbed.packageInfo.link": "Read the full documentation",
	"chatEmbed.chatTriggerNode": "You can use a Chat Trigger Node to embed the chat widget directly into n8n.",
	"chatEmbed.url": "https://www.npmjs.com/package/{'@'}n8n/chat",
	"codeEdit.edit": "Edit",
	"codeNodeEditor.askAi": "✨ Ask AI",
	"codeNodeEditor.completer.$()": "Output data of the {nodeName} node",
	"codeNodeEditor.completer.$execution": "Retrieve or set metadata for the current execution",
	"codeNodeEditor.completer.$execution.id": "The ID of the current workflow execution",
	"codeNodeEditor.completer.$execution.mode": "Returns either <code>test</code> (meaning the execution was triggered by clicking a button in n8n) or <code>production</code> (meaning the execution was triggered automatically)",
	"codeNodeEditor.completer.$execution.resumeUrl": "The webhook URL to call to resume a workflow waiting at a 'Wait' node.",
	"codeNodeEditor.completer.$execution.resumeFormUrl": "The URL to access a form generated by the 'Wait' node.",
	"codeNodeEditor.completer.$execution.customData": "Set and get custom execution data (e.g. to filter executions by). You can also do this with the 'Execution Data' node.",
	"codeNodeEditor.completer.$execution.customData.set": "Stores custom execution data under the key specified. Use this to easily filter executions by this data.",
	"codeNodeEditor.completer.$execution.customData.set.args.key": "The key (identifier) under which the data is stored",
	"codeNodeEditor.completer.$execution.customData.set.args.value": "The data to store",
	"codeNodeEditor.completer.$execution.customData.set.examples.1": "Store the user's email, to easily retrieve all execs related to that user later",
	"codeNodeEditor.completer.$execution.customData.get": "Returns the custom execution data stored under the given key.",
	"codeNodeEditor.completer.$execution.customData.get.args.key": "The key (identifier) under which the data is stored",
	"codeNodeEditor.completer.$execution.customData.get.examples.1": "Get the user's email (which was previously stored)",
	"codeNodeEditor.completer.$execution.customData.setAll": "Sets multiple key-value pairs of  custom data for the execution. Use this to easily filter executions by this data.",
	"codeNodeEditor.completer.$execution.customData.setAll.args.obj": "A JavaScript object containing key-value pairs of the data to set",
	"codeNodeEditor.completer.$execution.customData.getAll": "Returns all the key-value pairs of custom data that have been set in the current execution.",
	"codeNodeEditor.completer.$ifEmpty": "Returns the first parameter if it isn't empty, otherwise returns the second parameter. The following count as empty: <code>\"</code>, <code>[]</code>, <code>{'{}'}</code>, <code>null</code>, <code>undefined</code>",
	"codeNodeEditor.completer.$ifEmpty.args.value": "The value to return, provided it isn't empty",
	"codeNodeEditor.completer.$ifEmpty.args.valueIfEmpty": "What to return if <code>value</code> is empty",
	"codeNodeEditor.completer.$input": "The input data of the current node",
	"codeNodeEditor.completer.$input.all": "@:_reusableBaseText.codeNodeEditor.completer.all",
	"codeNodeEditor.completer.$input.first": "@:_reusableBaseText.codeNodeEditor.completer.first",
	"codeNodeEditor.completer.$input.item": "The item that generated the current one",
	"codeNodeEditor.completer.$input.itemMatching": "@:_reusableBaseText.codeNodeEditor.completer.itemMatching",
	"codeNodeEditor.completer.$input.last": "@:_reusableBaseText.codeNodeEditor.completer.last",
	"codeNodeEditor.completer.$itemIndex": "The position of the item currently being processed in the list of input items",
	"codeNodeEditor.completer.$jmespath": "Extracts data from an object (or array of objects) using a <a target=\"_blank\" href=\"https://docs.n8n.io/code/cookbook/jmespath/\">JMESPath</a> expression. Useful for querying complex, nested objects. Returns <code>undefined</code> if the expression is invalid.",
	"codeNodeEditor.completer.$jmespath.args.obj": "The Object or array of Objects to retrieve data from",
	"codeNodeEditor.completer.$jmespath.args.expression": "A <a target=\"_blank\" href=\"https://jmespath.org/examples.html\">JMESPath expression</a> defining the data to retrieve from the object",
	"codeNodeEditor.completer.$jmespath.examples.1": "Get all names, in an array",
	"codeNodeEditor.completer.$jmespath.examples.2": "Get the names and ages of everyone under 20",
	"codeNodeEditor.completer.$jmespath.examples.3": "Get the name of the first person under 20",
	"codeNodeEditor.completer.$jmespath.examples.4": "Get the names of all the guests in each reservation that require a double room",
	"codeNodeEditor.completer.$if": "Returns one of two values depending on the <code>condition</code>. Similar to the <code>?</code> operator in JavaScript.",
	"codeNodeEditor.completer.$if.args.condition": "The check to make. Should evaluate to either <code>true</code> or <code>false</code>",
	"codeNodeEditor.completer.$if.args.valueIfTrue": "The value to return if the condition is true",
	"codeNodeEditor.completer.$if.args.valueIfFalse": "The value to return if the condition is false",
	"codeNodeEditor.completer.$if.examples.1": "Return \"Good day\" if time is before 5pm, otherwise \"Good evening\"",
	"codeNodeEditor.completer.$if.examples.2": "$if() calls can be combined\nReturn \"Good morning\" if time is before 10am, \"Good day\" it's before 5pm, otherwise \"Good evening\"",
	"codeNodeEditor.completer.$max": "Returns the highest of the given numbers, or -Infinity if there are no parameters.",
	"codeNodeEditor.completer.$max.args.numbers": "The numbers to compare",
	"codeNodeEditor.completer.$min": "Returns the lowest of the given numbers, or Infinity if there are no parameters.",
	"codeNodeEditor.completer.$now": "A DateTime representing the current moment. \n\nUses the workflow's time zone (which can be changed in the workflow settings).",
	"codeNodeEditor.completer.$parameter": "The configuration settings of the current node. These are the parameters you fill out within the node's UI (e.g. its operation).",
	"codeNodeEditor.completer.$prevNode": "Information about the node that the current input came from. \n\nWhen in a 'Merge' node, always uses the first input connector.",
	"codeNodeEditor.completer.$prevNode.name": "The name of the node that the current input came from. \n\nAlways uses the current node's first input connector if there is more than one (e.g. in the 'Merge' node).",
	"codeNodeEditor.completer.$prevNode.outputIndex": "The index of the output connector that the current input came from. Use this when the previous node had multiple outputs (such as an 'If' or 'Switch' node). \n\nAlways uses the current node's first input connector if there is more than one (e.g. in the 'Merge' node).",
	"codeNodeEditor.completer.$prevNode.runIndex": "The run of the previous node that generated the current input. \n\nAlways uses the current node's first input connector if there is more than one (e.g. in the 'Merge' node). ",
	"codeNodeEditor.completer.$runIndex": "The index of the current run of the current node execution. Starts at 0.",
	"codeNodeEditor.completer.$nodeVersion": "The version of the current node (as displayed at the bottom of the nodes's settings pane)",
	"codeNodeEditor.completer.$today": "A DateTime representing midnight at the start of the current day. \n\nUses the instance's time zone (unless overridden in the workflow's settings).",
	"codeNodeEditor.completer.$vars": "The <a target=\"_blank\"  href=\"https://docs.n8n.io/code/variables/\">variables</a> available to the workflow",
	"codeNodeEditor.completer.$vars.varName.global": "Global variable defined for this n8n instance. All variables evaluate to strings.",
	"codeNodeEditor.completer.$vars.varName.global.overridden": "Global variable overridden by project {projectName} variable. All variables evaluate to strings. ",
	"codeNodeEditor.completer.$vars.varName.project": "Project variable defined in the {projectName} project. All variables evaluate to strings.",
	"codeNodeEditor.completer.$secrets": "The secrets from an <a target=\"_blank\" href=\"https://docs.n8n.io/external-secrets/\">external secrets vault</a>, if configured. Secret values are never displayed to the user. Only available in credential fields.",
	"codeNodeEditor.completer.$secrets.provider": "External secrets providers connected to this n8n instance.",
	"codeNodeEditor.completer.$secrets.provider.varName": "External secrets connected to this n8n instance. All secrets evaluate to strings.",
	"codeNodeEditor.completer.$workflow": "Information about the current workflow",
	"codeNodeEditor.completer.$workflow.active": "Whether the workflow is active",
	"codeNodeEditor.completer.$workflow.id": "The workflow ID. Can also be found in the workflow's URL.",
	"codeNodeEditor.completer.$workflow.name": "The name of the workflow, as shown at the top of the editor",
	"codeNodeEditor.completer.$response": "The response returned by the last HTTP call. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$response.headers": "The headers returned by the last HTTP call. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$response.statusCode": "The HTTP status code returned by the last HTTP call. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$response.statusMessage": "An optional message regarding the request status. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$response.body": "The body of the response object from the last HTTP call. Only available in the 'HTTP Request' node",
	"codeNodeEditor.completer.$request": "The request object sent during the last run of the node. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.$pageCount": "The number of results pages the node has fetched. Only available in the 'HTTP Request' node.",
	"codeNodeEditor.completer.dateTime": "Luxon DateTime. Use this object to parse, format and manipulate dates and times.",
	"codeNodeEditor.completer.binary": "Returns any binary input data to the current node, for the current item. Shorthand for <code>$input.item.binary</code>.",
	"codeNodeEditor.completer.binary.mimeType": "A string representing the format of the file's contents, e.g. <code>image/jpeg</code>",
	"codeNodeEditor.completer.binary.fileSize": "A string representing the size of the file (e.g. <code>1 kB</code>)",
	"codeNodeEditor.completer.binary.fileName": "The name of the file, including extension",
	"codeNodeEditor.completer.binary.fileExtension": "The suffix attached to the filename (e.g. <code>txt</code>)",
	"codeNodeEditor.completer.binary.fileType": "A string representing the type of the file, e.g. <code>image</code>. Corresponds to the first part of the MIME type.",
	"codeNodeEditor.completer.binary.id": "The unique ID of the file. Used to identify the file when it is stored on disk or in a storage service such as S3.",
	"codeNodeEditor.completer.binary.directory": "The path to the directory that the file is stored in. Useful for distinguishing between files with the same name in different directories. Not set if n8n is  configured to store files in its database.",
	"codeNodeEditor.completer.item.binary": "Returns any binary data the item contains.",
	"codeNodeEditor.completer.item.json": "Returns the JSON data the item contains.",
	"codeNodeEditor.completer.math": "Mathematical utility methods",
	"codeNodeEditor.completer.globalObject": "Methods to manipulate JavaScript Objects",
	"codeNodeEditor.completer.globalObject.assign": "Merge all enumerable object properties into a target object. Returns the modified target object.",
	"codeNodeEditor.completer.globalObject.entries": "The object's keys and values",
	"codeNodeEditor.completer.globalObject.keys": "The object's keys",
	"codeNodeEditor.completer.globalObject.values": "The object's values",
	"codeNodeEditor.completer.json": "Returns the JSON input data to the current node, for the current item. Shorthand for <code>$input.item.json</code>.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.expandFormat": "Produce the the fully expanded format token for the locale Does NOT quote characters, so quoted tokens will not round trip correctly.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromFormat": "Create a DateTime from an input string and format string.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromFormatExplain": "Explain how a string would be parsed by fromFormat().",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromHTTP": "Create a DateTime from an HTTP header date",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO": "Create a DateTime from an ISO 8601 string",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO.args.isoString": "ISO 8601 string to convert to a DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromISO.args.opts": "Configuration options. See  See <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefromiso\">Luxon docs</a> for more info.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromJSDate": "Create a DateTime from a JavaScript Date object. Uses the default zone",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis": "Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis.args.milliseconds": "Number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC)",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromMillis.args.opts": "Configuration options. See  See <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefrommillis\">Luxon docs</a> for more info.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromObject": "Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromRFC2822": "Create a DateTime from an RFC 2822 string",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromString": "Deprecated: use `fromFormat` instead.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromStringExplain": "Deprecated: use `fromFormatExplain` instead.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSQL": "Create a DateTime from a SQL date, time, or datetime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds": "Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds.args.seconds": "Number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC)",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.fromSeconds.args.opts": "Configuration options. See <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimefromseconds\">Luxon docs</a> for more info.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.invalid": "Create an invalid DateTime.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.isDateTime": "Check if an object is a DateTime. Works across context boundaries",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.isDateTime.args.maybeDateTime": "Potential DateTime to check. Only instances of the Luxon DateTime class will return <code>true</code>.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.local": "Create a local DateTime",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.max": "Return the max of several date times.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.max.args.dateTimes": "DateTime objects to compare",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.min": "Return the min of several date times.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.min.args.dateTimes": "DateTime objects to compare",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.now": "Create a DateTime for the current instant, in the workflow's local time zone",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.parseFormatForOpts": "Produce the the fully expanded format token for the locale Does NOT quote characters, so quoted tokens will not round trip correctly.",
	"codeNodeEditor.completer.luxon.dateTimeStaticMethods.utc": "Create a DateTime in UTC",
	"codeNodeEditor.completer.luxon.instanceMethods.day": "The day of the month (1-31).",
	"codeNodeEditor.completer.luxon.instanceMethods.daysInMonth": "Returns the number of days in this DateTime's month.",
	"codeNodeEditor.completer.luxon.instanceMethods.daysInYear": "Returns the number of days in this DateTime's year.",
	"codeNodeEditor.completer.luxon.instanceMethods.diff": "Return the difference between two DateTimes as a Duration.",
	"codeNodeEditor.completer.luxon.instanceMethods.diffNow": "Return the difference between this DateTime and right now.",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf": "Rounds the DateTime up to the end of one of its units, e.g. the end of the month",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf.args.unit": "The unit to round to the end of. Can be <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.endOf.args.opts": "Object with options that affect the output. Possible properties:\n<code>useLocaleWeeks</code> (boolean): Whether to use the locale when calculating the start of the week. Defaults to false.",
	"codeNodeEditor.completer.luxon.instanceMethods.equals": "Returns <code>true</code> if the two DateTimes represent exactly the same moment and are in the same time zone. For a less strict comparison, use <code>hasSame()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.equals.args.other": "The other DateTime to compare",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame": "Returns <code>true</code> if the two DateTimes are the same, down to the unit specified. Time zones are ignored (only local times are compared), so use <code>toUTC()</code> first if needed.",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame.args.other": "The other DateTime to compare",
	"codeNodeEditor.completer.luxon.instanceMethods.hasSame.args.unit": "The unit of time to check sameness down to. One of <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.hour": "The hour of the day (0-23).",
	"codeNodeEditor.completer.luxon.instanceMethods.invalidExplanation": "Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid.",
	"codeNodeEditor.completer.luxon.instanceMethods.invalidReason": "Returns an error code if this DateTime is invalid, or null if the DateTime is valid.",
	"codeNodeEditor.completer.luxon.instanceMethods.isInDST": "Whether the DateTime is in daylight saving time.",
	"codeNodeEditor.completer.luxon.instanceMethods.isInLeapYear": "Whether the DateTime is in a leap year.",
	"codeNodeEditor.completer.luxon.instanceMethods.isOffsetFixed": "Get whether this zone's offset ever changes, as in a DST.",
	"codeNodeEditor.completer.luxon.instanceMethods.isValid": "Returns whether the DateTime is valid. Invalid DateTimes occur when The DateTime was created from invalid calendar information, such as the 13th month or February 30. The DateTime was created by an operation on another invalid date.",
	"codeNodeEditor.completer.luxon.instanceMethods.locale": "The locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.max": "Return the max of several date times.",
	"codeNodeEditor.completer.luxon.instanceMethods.millisecond": "The millisecond of the second (0-999).",
	"codeNodeEditor.completer.luxon.instanceMethods.min": "Return the min of several date times",
	"codeNodeEditor.completer.luxon.instanceMethods.minus": "Subtract hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds.",
	"codeNodeEditor.completer.luxon.instanceMethods.minute": "The minute of the hour (0-59).",
	"codeNodeEditor.completer.luxon.instanceMethods.month": "The month (1-12).",
	"codeNodeEditor.completer.luxon.instanceMethods.monthLong": "The textual long month name, e.g. 'October'. Defaults to the system's locale if unspecified.",
	"codeNodeEditor.completer.luxon.instanceMethods.monthShort": "The textual abbreviated month name, e.g. 'Oct'. Defaults to the system's locale if unspecified.",
	"codeNodeEditor.completer.luxon.instanceMethods.numberingSystem": "Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.offset": "Get the UTC offset of this DateTime in minutes",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNameLong": "Get the long human name for the zone's current offset, for example \"Eastern Standard Time\" or \"Eastern Daylight Time\".",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNameShort": "Get the short human name for the zone's current offset, for example \"EST\" or \"EDT\".'",
	"codeNodeEditor.completer.luxon.instanceMethods.offsetNumber": "Get the short human name for the zone's current offset, for example \"EST\" or \"EDT\".'",
	"codeNodeEditor.completer.luxon.instanceMethods.ordinal": "Get the ordinal (meaning the day of the year).",
	"codeNodeEditor.completer.luxon.instanceMethods.outputCalendar": "Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.plus": "Add hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds.",
	"codeNodeEditor.completer.luxon.instanceMethods.quarter": "The quarter of the year (1-4).",
	"codeNodeEditor.completer.luxon.instanceMethods.reconfigure": "'Set' the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.resolvedLocaleOptions": "Returns the resolved Intl options for this DateTime. This is useful in understanding the behavior of formatting methods.",
	"codeNodeEditor.completer.luxon.instanceMethods.second": "The second of the minute (0-59).",
	"codeNodeEditor.completer.luxon.instanceMethods.set": "Assigns new values to specified units of the DateTime. To round a DateTime, see also <code>startOf()</code> and <code>endOf()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.set.args.values": "An object containing the units to set and corresponding values to assign. Possible keys are <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code> and <code>millsecond</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.setLocale": "Sets the locale, which determines the language and formatting for the DateTime. Useful when generating a textual representation of the DateTime, e.g. with <code>format()</code> or <code>toLocaleString()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.setLocale.args.locale": "The locale to set, e.g. 'en-GB' for British English or 'pt-BR' for Brazilian Portuguese. <a target=\"blank\" href=”https://www.localeplanet.com/icu/”>List</a> (unofficial)",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone": "Converts the DateTime to the given time zone. The DateTime still represents the same moment unless specified in the options. See also <code>toLocal()</code> and <code>toUTC()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone.args.zone": "A zone identifier, either in the format <code>'America/New_York'</code>, <code>'UTC+3'</code>, or the strings <code>'local'</code> or <code>'utc'</code>. <code>'local'</code> is the workflow's local time zone, this can be changed in workflow settings.",
	"codeNodeEditor.completer.luxon.instanceMethods.setZone.args.opts": "Options that affect the output. Possible properties:\n<code>keepCalendarTime</code> (boolean): Whether to keep the time the same and only change the offset. Defaults to false.",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf": "Rounds the DateTime down to the beginning of one of its units, e.g. the start of the month",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf.args.unit": "The unit to round to the beginning of. One of <code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, or <code>millisecond</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.startOf.args.opts": "Object with options that affect the output. Possible properties:\n<code>useLocaleWeeks</code> (boolean): Whether to use the locale when calculating the start of the week. Defaults to false.",
	"codeNodeEditor.completer.luxon.instanceMethods.toBSON": "Returns a BSON serializable equivalent to this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.toFormat": "Returns a string representation of this DateTime formatted according to the specified format string.",
	"codeNodeEditor.completer.luxon.instanceMethods.toHTTP": "Returns a string representation of this DateTime appropriate for use in HTTP headers.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISO": "Returns an ISO 8601-compliant string representation of this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISO.args.opts": "Configuration options. See <a target=\"blank\" href=\"https://moment.github.io/luxon/api-docs/index.html#datetimetoiso\">Luxon docs</a> for more info.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISODate": "Returns an ISO 8601-compliant string representation of this DateTime's date component.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISOTime": "Returns an ISO 8601-compliant string representation of this DateTime's time component.",
	"codeNodeEditor.completer.luxon.instanceMethods.toISOWeekDate": "Returns an ISO 8601-compliant string representation of this DateTime's week date.",
	"codeNodeEditor.completer.luxon.instanceMethods.toJSON": "Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.",
	"codeNodeEditor.completer.luxon.instanceMethods.toJsDate": "Returns a JavaScript Date equivalent to this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocal": "Converts a DateTime to the workflow's local time zone. The DateTime still represents the same moment unless specified in the parameters. The workflow's time zone can be set in the workflow settings.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocal.example": "if time zone is Europe/Berlin",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleParts": "Returns an array of format \"parts\", meaning individual tokens along with metadata.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString": "Returns a localized string representing the DateTime, i.e. in the language and format corresponding to its locale. Defaults to the system's locale if none specified.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString.args.opts": "Configuration options for the rendering. See <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat</a> for a full list. Defaults to rendering a short date.",
	"codeNodeEditor.completer.luxon.instanceMethods.toLocaleString.example": "Configuration options for the rendering. See <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat</a> for a full list. Defaults to rendering a short date.",
	"codeNodeEditor.completer.luxon.instanceMethods.toMillis": "Returns a Unix timestamp in milliseconds (the number elapsed since 1st Jan 1970)",
	"codeNodeEditor.completer.luxon.instanceMethods.toObject": "Returns a JavaScript object with this DateTime's year, month, day, and so on.",
	"codeNodeEditor.completer.luxon.instanceMethods.toRFC2822": "Returns an RFC 2822-compatible string representation of this DateTime, always in UTC.",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelative": "Returns a textual representation of the time relative to now, e.g. 'in two days'. Rounds down by default.",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelative.args.opts": "Options that affect the output. Possible properties:\n<code>unit</code> = the unit to default to (<code>years</code>, <code>months</code>, <code>days</code>, etc.).\n<code>locale</code> = the language and formatting to use (e.g. <code>de</code>, <code>fr</code>)",
	"codeNodeEditor.completer.luxon.instanceMethods.toRelativeCalendar": "Returns a string representation of this date relative to today, such as '\"'yesterday' or 'next month'.",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQL": "Returns a string representation of this DateTime appropriate for use in SQL DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQLDate": "Returns a string representation of this DateTime appropriate for use in SQL Date.",
	"codeNodeEditor.completer.luxon.instanceMethods.toSQLTime": "Returns a string representation of this DateTime appropriate for use in SQL Time.",
	"codeNodeEditor.completer.luxon.instanceMethods.toSeconds": "Returns a Unix timestamp in seconds (the number elapsed since 1st Jan 1970)",
	"codeNodeEditor.completer.luxon.instanceMethods.toString": "Returns a string representation of the DateTime. Similar to <code>toISO()</code>. For more formatting options, see <code>format()</code> or <code>toLocaleString()</code>.",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC": "Converts a DateTime to the UTC time zone. The DateTime still represents the same moment unless specified in the parameters. Use <code>setZone()</code> to convert to other zones.",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC.args.offset": "An offset from UTC in minutes",
	"codeNodeEditor.completer.luxon.instanceMethods.toUTC.args.opts": "Options that affect the output. Possible properties:\n<code>keepCalendarTime</code> (boolean): Whether to keep the time the same and only change the offset. Defaults to false.",
	"codeNodeEditor.completer.luxon.instanceMethods.toUnixInteger": "Returns the epoch seconds (as a whole number) of this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.until": "Return an Interval spanning between this DateTime and another DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.valueOf": "Returns the epoch milliseconds of this DateTime.",
	"codeNodeEditor.completer.luxon.instanceMethods.weekNumber": "The week number of the year (1-52ish).",
	"codeNodeEditor.completer.luxon.instanceMethods.weekYear": "Get the week year.",
	"codeNodeEditor.completer.luxon.instanceMethods.weekday": "The day of the week. 1 is Monday and 7 is Sunday.",
	"codeNodeEditor.completer.luxon.instanceMethods.weekdayLong": "The textual long weekday name, e.g. 'Wednesday'. Defaults to the system's locale if unspecified.",
	"codeNodeEditor.completer.luxon.instanceMethods.weekdayShort": "The textual abbreviated weekday name, e.g. 'Wed'. Defaults to the system's locale if unspecified.",
	"codeNodeEditor.completer.luxon.instanceMethods.weeksInWeekYear": "Returns the number of weeks in this DateTime's year.",
	"codeNodeEditor.completer.luxon.instanceMethods.year": "The year.",
	"codeNodeEditor.completer.luxon.instanceMethods.zone": "The time zone associated with the DateTime",
	"codeNodeEditor.completer.luxon.instanceMethods.zoneName": "Get the name of the time zone.",
	"codeNodeEditor.completer.selector.all": "@:_reusableBaseText.codeNodeEditor.completer.all",
	"codeNodeEditor.completer.selector.context": "Extra data about the node",
	"codeNodeEditor.completer.selector.first": "@:_reusableBaseText.codeNodeEditor.completer.first",
	"codeNodeEditor.completer.selector.item": "Returns the matching item, i.e. the one used to produce the current item in the current node.",
	"codeNodeEditor.completer.selector.args.branchIndex": "The output branch of the node to use. Defaults to the first branch (index 0)",
	"codeNodeEditor.completer.selector.args.runIndex": "The run of the node to use. Defaults to the first run (index 0)",
	"codeNodeEditor.completer.selector.itemMatching": "@:_reusableBaseText.codeNodeEditor.completer.itemMatching",
	"codeNodeEditor.completer.selector.itemMatching.args.currentItemIndex": "The index of the item in the current node to be matched with.",
	"codeNodeEditor.completer.selector.last": "@:_reusableBaseText.codeNodeEditor.completer.last",
	"codeNodeEditor.completer.selector.params": "The configuration settings of the given node. These are the parameters you fill out within the node's UI (e.g. its operation).",
	"codeNodeEditor.completer.selector.isExecuted": "Is <code>true</code> if the node has executed, <code>false</code> otherwise",
	"codeNodeEditor.completer.section.input": "Input",
	"codeNodeEditor.completer.section.prevNodes": "Earlier nodes",
	"codeNodeEditor.completer.section.metadata": "Metadata",
	"codeNodeEditor.completer.section.fields": "Fields",
	"codeNodeEditor.completer.section.properties": "Properties",
	"codeNodeEditor.completer.section.methods": "Methods",
	"codeNodeEditor.completer.section.otherMethods": "Other methods",
	"codeNodeEditor.completer.section.recommended": "Suggested",
	"codeNodeEditor.completer.section.recommendedMethods": "Suggested methods",
	"codeNodeEditor.completer.section.other": "Other",
	"codeNodeEditor.completer.section.edit": "Edit",
	"codeNodeEditor.completer.section.query": "Query",
	"codeNodeEditor.completer.section.format": "Format",
	"codeNodeEditor.completer.section.component": "Component",
	"codeNodeEditor.completer.section.case": "Case",
	"codeNodeEditor.completer.section.cast": "Cast",
	"codeNodeEditor.completer.section.compare": "Compare",
	"codeNodeEditor.completer.section.validation": "Validate",
	"codeNodeEditor.completer.section.variable.project": "Project Variables",
	"codeNodeEditor.completer.section.variable.global": "Global Variables",
	"codeNodeEditor.linter.allItems.firstOrLastCalledWithArg": "expects no argument.",
	"codeNodeEditor.linter.allItems.emptyReturn": "Code doesn't return items properly. Please return an array of objects, one for each item you would like to output.",
	"codeNodeEditor.linter.allItems.itemCall": "`item` is a property to access, not a method to call. Did you mean `.item` without brackets?",
	"codeNodeEditor.linter.allItems.itemMatchingNoArg": "`.itemMatching()` expects an item index to be passed in as its argument.",
	"codeNodeEditor.linter.allItems.unavailableItem": "Legacy `item` is only available in the 'Run Once for Each Item' mode.",
	"codeNodeEditor.linter.allItems.unavailableProperty": "`.item` is only available in the 'Run Once for Each Item' mode. Use `.first()` instead.",
	"codeNodeEditor.linter.allItems.unavailableVar": "is only available in the 'Run Once for Each Item' mode.",
	"codeNodeEditor.linter.bothModes.directAccess.firstOrLastCall": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.directAccess.itemProperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.varDeclaration.itemProperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.bothModes.varDeclaration.itemSubproperty": "@:_reusableBaseText.codeNodeEditor.linter.useJson",
	"codeNodeEditor.linter.eachItem.emptyReturn": "Code doesn't return an object. Please return an object representing the output item",
	"codeNodeEditor.linter.eachItem.legacyItemAccess": "`item` is a legacy var. Consider using `$input.item`",
	"codeNodeEditor.linter.eachItem.returnArray": "Code doesn't return an object. Array found instead. Please return an object representing the output item",
	"codeNodeEditor.linter.eachItem.unavailableItems": "Legacy `items` is only available in the 'Run Once for All Items' mode.",
	"codeNodeEditor.linter.eachItem.unavailableMethod": "Method `$input.{method}()` is only available in the 'Run Once for All Items' mode.",
	"codeNodeEditor.linter.eachItem.preferFirst": "Prefer `.first()` over `.item` so n8n can optimize execution",
	"codeNodeEditor.linter.bothModes.syntaxError": "Syntax error",
	"codeNodeEditor.linter.bothModes.dollarSignVariable": "Use a string literal instead of a variable so n8n can optimize execution.",
	"codeNodeEditor.askAi.placeholder": "Tell AI what you want the code to achieve. You can reference input data fields using dot notation (e.g. user.email)",
	"codeNodeEditor.askAi.intro": "Hey AI, generate JavaScript code that...",
	"codeNodeEditor.askAi.help": "Help",
	"codeNodeEditor.askAi.generateCode": "Generate Code",
	"codeNodeEditor.askAi.noInputData": "You can generate code once this node has incoming input data (from a node earlier in your workflow)",
	"codeNodeEditor.askAi.sureLeaveTab": "Are you sure you want to switch tab? The code generation will stop",
	"codeNodeEditor.askAi.areYouSure": "Are you sure?",
	"codeNodeEditor.askAi.switchTab": "Switch Tab",
	"codeNodeEditor.askAi.noPrompt": "First enter a prompt above before generating code",
	"codeNodeEditor.askAi.onlyAllItemsMode": "Ask AI generation works only in 'Run Once for All Items' mode",
	"codeNodeEditor.askAi.promptTooShort": "Enter a minimum of {minLength} characters before attempting to generate code",
	"codeNodeEditor.askAi.generateCodeAndReplace": "Generate and Replace Code",
	"codeNodeEditor.askAi.replaceCurrentCode": "Replace current code?",
	"codeNodeEditor.askAi.areYouSureToReplace": "Are you sure you want to generate new code? Your current code will be replaced.",
	"codeNodeEditor.askAi.loadingPhrase0": "AI cogs whirring, almost there…",
	"codeNodeEditor.askAi.loadingPhrase1": "up up down down left right b a start…",
	"codeNodeEditor.askAi.loadingPhrase2": "Consulting Jan Oberhauser…",
	"codeNodeEditor.askAi.loadingPhrase3": "Gathering bytes and pieces…",
	"codeNodeEditor.askAi.loadingPhrase4": "Checking if another AI knows the answer…",
	"codeNodeEditor.askAi.loadingPhrase5": "Checking on Stack Overflow…",
	"codeNodeEditor.askAi.loadingPhrase6": "Crunching data, AI-style…",
	"codeNodeEditor.askAi.loadingPhrase7": "Stand by, AI magic at work…",
	"codeNodeEditor.askAi.generationCompleted": "✨ Code generation completed",
	"codeNodeEditor.askAi.generationFailed": "Code generation failed",
	"codeNodeEditor.askAi.generationFailedUnknown": "Code generation failed due to an unknown reason. Try again in a few minutes",
	"codeNodeEditor.askAi.generationFailedWithReason": "Code generation failed with error: {error}. Try again in a few minutes",
	"codeNodeEditor.askAi.generationFailedDown": "We're sorry, our AI service is currently unavailable. Please try again later. If the problem persists, contact support.",
	"codeNodeEditor.askAi.generationFailedRate": "We've hit our rate limit with our AI partner (too many requests). Please wait a minute before trying again.",
	"codeNodeEditor.askAi.generationFailedTooLarge": "Your workflow data is too large for AI to process. Simplify the data being sent into the Code node and retry.",
	"codeNodeEditor.tabs.askAi": "✨ Ask AI",
	"codeNodeEditor.tabs.code": "Code",
	"codeNodeEditor.examples": "Examples",
	"codeNodeEditor.parameters": "Parameters",
	"codeNodeEditor.optional": "optional",
	"codeNodeEditor.defaultsTo": "Defaults to {default}.",
	"collectionParameter.choose": "Choose...",
	"collectionParameter.noProperties": "No properties",
	"communityNodeFooter.legacy": "Legacy",
	"communityNodeFooter.manage": "Manage",
	"communityNodeFooter.reportIssue": "Report issue",
	"credentialEdit.credentialConfig.accountConnected": "Account connected",
	"credentialEdit.credentialConfig.clickToCopy": "Click To Copy",
	"credentialEdit.credentialConfig.connectionTestedSuccessfully": "Connection tested successfully",
	"credentialEdit.credentialConfig.couldntConnectWithTheseSettings": "Couldn’t connect with these settings",
	"credentialEdit.credentialConfig.couldntConnectWithTheseSettings.sharee": "Problem with connection settings. {owner} may be able to fix this",
	"credentialEdit.credentialConfig.needHelpFillingOutTheseFields": "Need help filling out these fields?",
	"credentialEdit.credentialConfig.oAuthRedirectUrl": "OAuth Redirect URL",
	"credentialEdit.credentialConfig.openDocs": "Open docs",
	"credentialEdit.credentialConfig.pleaseCheckTheErrorsBelow": "Please check the errors below",
	"credentialEdit.credentialConfig.pleaseCheckTheErrorsBelow.sharee": "Problem with connection settings. {owner} may be able to fix this",
	"credentialEdit.credentialConfig.reconnect": "Reconnect",
	"credentialEdit.credentialConfig.reconnectOAuth2Credential": "Reconnect OAuth2 Credential",
	"credentialEdit.credentialConfig.redirectUrlCopiedToClipboard": "Redirect URL copied to clipboard",
	"credentialEdit.credentialConfig.retry": "Retry",
	"credentialEdit.credentialConfig.retryCredentialTest": "Retry credential test",
	"credentialEdit.credentialConfig.retrying": "Retrying",
	"credentialEdit.credentialConfig.subtitle": "In {appName}, use the URL above when prompted to enter an OAuth callback or redirect URL",
	"credentialEdit.credentialConfig.theServiceYouReConnectingTo": "the service you're connecting to",
	"credentialEdit.credentialConfig.missingCredentialType": "This credential's type isn't available. This usually happens when a previously installed community or custom node was uninstalled.",
	"credentialEdit.credentialConfig.authTypeSelectorLabel": "Connect using",
	"credentialEdit.credentialConfig.authTypeSelectorTooltip": "The authentication method to use for the connection",
	"credentialEdit.credentialConfig.recommendedAuthTypeSuffix": "(recommended)",
	"credentialEdit.credentialConfig.externalSecrets": "Enterprise plan users can pull in credentials from external vaults.",
	"credentialEdit.credentialConfig.externalSecrets.moreInfo": "More info",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.cancelButtonText": "Close",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.confirmButtonText": "Keep Editing",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.headline": "Close without saving?",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose1.message": "Are you sure you want to throw away the changes you made to the {credentialDisplayName} credential?",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.cancelButtonText": "Close",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.confirmButtonText": "Keep Editing",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.headline": "Close without connecting?",
	"credentialEdit.credentialEdit.confirmMessage.beforeClose2.message": "You need to connect your credential for it to work",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.cancelButtonText": "",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText": "Yes, delete",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline": "Delete Credential?",
	"credentialEdit.credentialEdit.confirmMessage.deleteCredential.message": "Are you sure you want to delete \"{savedCredentialName}\"? This may break any workflows that use it.",
	"credentialEdit.credentialEdit.connection": "Connection",
	"credentialEdit.credentialEdit.sharing": "Sharing",
	"credentialEdit.credentialEdit.couldNotFindCredentialOfType": "Could not find credential of type",
	"credentialEdit.credentialEdit.couldNotFindCredentialWithId": "Could not find credential with ID",
	"credentialEdit.credentialEdit.delete": "Delete",
	"credentialEdit.credentialEdit.details": "Details",
	"credentialEdit.credentialEdit.saving": "Saving",
	"credentialEdit.credentialEdit.showError.createCredential.title": "Problem creating credential",
	"credentialEdit.credentialEdit.showError.deleteCredential.title": "Problem deleting credential",
	"credentialEdit.credentialEdit.showError.generateAuthorizationUrl.message": "There was a problem generating the authorization URL",
	"credentialEdit.credentialEdit.showError.generateAuthorizationUrl.title": "OAuth Authorization Error",
	"credentialEdit.credentialEdit.showError.loadCredential.title": "Problem loading credential",
	"credentialEdit.credentialEdit.showError.updateCredential.title": "Problem updating credential",
	"credentialEdit.credentialEdit.showMessage.title": "Credential deleted",
	"credentialEdit.credentialEdit.testing": "Testing",
	"credentialEdit.credentialEdit.info.sharee": "Only {credentialOwnerName} can edit this connection",
	"credentialEdit.credentialInfo.allowUseBy": "Allow use by",
	"credentialEdit.credentialInfo.created": "Created",
	"credentialEdit.credentialInfo.id": "ID",
	"credentialEdit.credentialInfo.lastModified": "Last modified",
	"credentialEdit.credentialEdit.setupGuide": "Setup guide",
	"credentialEdit.credentialEdit.docs": "Docs",
	"credentialEdit.oAuthButton.connectMyAccount": "Connect my account",
	"credentialEdit.oAuthButton.signInWithGoogle": "Sign in with Google",
	"credentialEdit.credentialSharing.info.owner": "Sharing a credential allows people to use it in their workflows. They cannot access credential details.",
	"credentialEdit.credentialSharing.info.sharee.team": "Only users with credential sharing permission can change who this credential is shared with",
	"credentialEdit.credentialSharing.info.sharee.personal": "Only {credentialOwnerName} or users with credential sharing permission can change who this credential is shared with",
	"credentialEdit.credentialSharing.info.sharee.fallback": "the owner",
	"credentialEdit.credentialSharing.list.delete": "Remove",
	"credentialEdit.credentialSharing.list.delete.confirm.title": "Remove access?",
	"credentialEdit.credentialSharing.list.delete.confirm.message": "This may break any workflows in which {name} has used this credential",
	"credentialEdit.credentialSharing.list.delete.confirm.confirmButtonText": "Remove",
	"credentialEdit.credentialSharing.list.delete.confirm.cancelButtonText": "Cancel",
	"credentialEdit.credentialSharing.role.user": "User",
	"credentialSelectModal.addNewCredential": "Add new credential",
	"credentialSelectModal.continue": "Continue",
	"credentialSelectModal.searchForApp": "Search for app...",
	"credentialSelectModal.selectAnAppOrServiceToConnectTo": "Select an app or service to connect to",
	"credentialsList.addNew": "Add New",
	"credentialsList.confirmMessage.cancelButtonText": "",
	"credentialsList.confirmMessage.confirmButtonText": "Yes, delete",
	"credentialsList.confirmMessage.headline": "Delete Credential?",
	"credentialsList.confirmMessage.message": "Are you sure you want to delete {credentialName}?",
	"credentialsList.created": "Created",
	"credentialsList.credentials": "Credentials",
	"credentialsList.deleteCredential": "Delete Credential",
	"credentialsList.editCredential": "Edit Credential",
	"credentialsList.errorLoadingCredentials": "Error loading credentials",
	"credentialsList.name": "@:_reusableBaseText.name",
	"credentialsList.operations": "Operations",
	"credentialsList.showError.deleteCredential.title": "Problem deleting credential",
	"credentialsList.showMessage.title": "Credential deleted",
	"credentialsList.type": "Type",
	"credentialsList.updated": "Updated",
	"credentialsList.yourSavedCredentials": "Your saved credentials",
	"credentials.heading": "Credentials",
	"credentials.add": "Add credential",
	"credentials.project.add": "Add credential to project",
	"credentials.empty.heading": "{name}, let's set up a credential",
	"credentials.empty.heading.userNotSetup": "Set up a credential",
	"credentials.empty.description": "Credentials let workflows interact with your apps and services",
	"credentials.empty.button": "Add first credential",
	"credentials.empty.button.disabled.tooltip": "Your current role in the project does not allow you to create credentials",
	"credentials.item.open": "Open",
	"credentials.item.delete": "Delete",
	"credentials.item.move": "Change owner",
	"credentials.item.updated": "Last updated",
	"credentials.item.created": "Created",
	"credentials.item.owner": "Owner",
	"credentials.item.readonly": "Read only",
	"credentials.item.needsSetup": "Needs first setup",
	"credentials.search.placeholder": "Search credentials...",
	"credentials.filters.type": "Type",
	"credentials.filters.setup": "Needs first setup",
	"credentials.filters.status": "Status",
	"credentials.filters.active": "Some credentials may be hidden since filters are applied.",
	"credentials.filters.active.reset": "Remove filters",
	"credentials.sort.lastUpdated": "Sort by last updated",
	"credentials.sort.lastCreated": "Sort by last created",
	"credentials.sort.nameAsc": "Sort by name (A-Z)",
	"credentials.sort.nameDesc": "Sort by name (Z-A)",
	"credentials.noResults": "No credentials found",
	"credentials.noResults.withSearch.switchToShared.preamble": "some credentials may be",
	"credentials.noResults.withSearch.switchToShared.link": "hidden",
	"credentials.create.personal.toast.title": "Credential successfully created inside your personal space",
	"credentials.create.project.toast.title": "Credential successfully created in {projectName}",
	"credentials.create.project.toast.text": "All members from {projectName} will have access to this credential.",
	"dataDisplay.needHelp": "Need help?",
	"dataDisplay.nodeDocumentation": "Node Documentation",
	"dataDisplay.openDocumentationFor": "Open {nodeTypeDisplayName} documentation",
	"dataMapping.dragColumnToFieldHint": "Drag onto a field to map column to that field",
	"dataMapping.dragFromPreviousHint": "Map data from previous nodes to <b>{name}</b> by first clicking this button",
	"dataMapping.success.title": "You just mapped some data!",
	"dataMapping.success.moreInfo": "Check out our <a href=\"https://docs.n8n.io/data/data-mapping\" target=\"_blank\">docs</a> for more details on mapping data in n8n",
	"dataMapping.tableView.tableColumnsExceeded": "Some columns are hidden",
	"dataMapping.tableView.tableColumnsExceeded.tooltip": "Your data has more than {columnLimit} columns so some are hidden. Switch to {link} to see all data.",
	"dataMapping.tableView.tableColumnsExceeded.tooltip.link": "JSON view",
	"dataMapping.tableView.columnCollapsing": "Collapse rows",
	"dataMapping.tableView.columnCollapsing.tooltip": "Collapse rows (to compare values in this column)",
	"dataMapping.schemaView.emptyData": "No fields - node executed, but no items were sent on this branch",
	"dataMapping.schemaView.emptySchema": "No fields - item(s) exist, but they're empty",
	"dataMapping.schemaView.emptySchemaWithBinary": "Only binary data exists. View it using the 'Binary' tab",
	"dataMapping.schemaView.executeSchema": "{link} to see schema",
	"dataMapping.schemaView.disabled": "This node is disabled and will just pass data through",
	"dataMapping.schemaView.noMatches": "No results for '{search}'",
	"dataMapping.schemaView.preview": "Usually outputs the following fields. Execute the node to see the actual ones. {link}",
	"dataMapping.schemaView.previewExtraFields": "There may be more fields. Execute the node to be sure.",
	"dataMapping.schemaView.previewNode": "Preview",
	"dataMapping.schemaView.variablesContextTitle": "Variables and context",
	"dataMapping.schemaView.execution.resumeUrl": "The URL for resuming a 'Wait' node",
	"dataMapping.schemaView.variablesUpgrade": "Set global variables and use them across workflows with the Pro or Enterprise plan. <a href=\"https://docs.n8n.io/code/variables/\" target=\"_blank\">Details</a>",
	"dataMapping.schemaView.variablesEmpty": "Create variables that can be used across workflows <a href=\"/variables\" target=\"_blank\">here</a>",
	"displayWithChange.cancelEdit": "Cancel Edit",
	"displayWithChange.clickToChange": "Click to Change",
	"displayWithChange.setValue": "Set Value",
	"duplicateWorkflowDialog.cancel": "@:_reusableBaseText.cancel",
	"duplicateWorkflowDialog.chooseOrCreateATag": "Choose or create a tag",
	"duplicateWorkflowDialog.duplicateWorkflow": "Duplicate Workflow",
	"duplicateWorkflowDialog.enterWorkflowName": "Enter workflow name",
	"duplicateWorkflowDialog.save": "Duplicate",
	"duplicateWorkflowDialog.errors.missingName.title": "Name missing",
	"duplicateWorkflowDialog.errors.missingName.message": "Please enter a name.",
	"duplicateWorkflowDialog.errors.forbidden.title": "Duplicate workflow failed",
	"duplicateWorkflowDialog.errors.forbidden.message": "This action is forbidden. Do you have the correct permissions?",
	"duplicateWorkflowDialog.errors.generic.title": "Duplicate workflow failed",
	"editor.mainHeader.githubButton.label": "Star n8n-io/n8n on GitHub",
	"experiments.personalizedTemplatesV3.browseAllTemplates": "Browse our template library",
	"experiments.personalizedTemplatesV3.couldntFind": "Need something different?",
	"experiments.personalizedTemplatesV3.exploreTemplates": "Get started with HubSpot workflows:",
	"experiments.personalizedTemplatesV3.loadingTemplates": "Loading recommendations...",
	"experiments.personalizedTemplatesV3.recommendationTooltip": "Recommended workflows for you",
	"experiments.personalizedTemplatesV3.recommendedForYou": "Recommended for you",
	error,
	"error.goBack": "Go back",
	"error.pageNotFound": "Oops, couldn’t find that",
	"error.entityNotFound.title": "{entity} not found",
	"error.entityNotFound.text": "We couldn’t find the {entity} you were looking for. Make sure you have the correct URL.",
	"error.entityNotFound.action": "Go to overview",
	"error.entityUnAuthorized.title": "You need access",
	"error.entityUnAuthorized.content": "You don't have permission to view this {entity}. Please contact the person who shared this link to request access.",
	"executions.ExecutionStatus": "Execution status",
	"executions.concurrency.docsLink": "https://docs.n8n.io/hosting/scaling/concurrency-control/",
	"executionDetails.additionalActions": "Additional Actions",
	"executionDetails.confirmMessage.confirmButtonText": "Yes, delete",
	"executionDetails.confirmMessage.headline": "Delete Execution?",
	"executionDetails.confirmMessage.message": "Are you sure that you want to delete the current execution?",
	"executionDetails.confirmMessage.annotationsNote": "By deleting this you will also remove the associated annotation data.",
	"executionDetails.deleteExecution": "Delete this execution",
	"executionDetails.executionFailed": "Execution failed",
	"executionDetails.executionFailed.recoveredNodeTitle": "Can’t show data",
	"executionDetails.executionFailed.recoveredNodeMessage": "The execution was interrupted, so the data was not saved. Try fixing the workflow and re-executing.",
	"executionDetails.executionId": "Execution ID",
	"executionDetails.executionWaiting": "Execution waiting",
	"executionDetails.executionWasSuccessful": "Execution was successful",
	"executionDetails.of": "of",
	"executionDetails.at": "at",
	"executionDetails.newMessage": "Execution waiting in the queue.",
	"executionDetails.openWorkflow": "Open Workflow",
	"executionDetails.readOnly.readOnly": "Read only",
	"executionDetails.readOnly.youreViewingTheLogOf": "You're viewing the log of a previous execution. You cannot<br />\n		make changes since this execution already occurred. Make changes<br />\n		to this workflow by clicking on its name on the left.",
	"executionDetails.retry": "Retry of execution",
	"executionDetails.runningTimeFinished": "in {time}",
	"executionDetails.runningTimeRunning": "for",
	"executionDetails.runningMessage": "Execution is running. It will show here once finished.",
	"executionDetails.startingSoon": "Starting soon",
	"executionDetails.workflow": "workflow",
	"executionsLandingPage.emptyState.noTrigger.heading": "Set up the first step. Then execute your workflow",
	"executionsLandingPage.emptyState.noTrigger.buttonText": "Add first step...",
	"executionsLandingPage.clickExecutionMessage": "Click on an execution from the list to view it",
	"executionsLandingPage.emptyState.heading": "Nothing here yet",
	"executionsLandingPage.emptyState.message": "New workflow executions will show here",
	"executionsLandingPage.emptyState.accordion.title": "Which executions is this workflow saving?",
	"executionsLandingPage.emptyState.accordion.titleWarning": "Some executions won’t be saved",
	"executionsLandingPage.emptyState.accordion.productionExecutions": "Production executions",
	"executionsLandingPage.emptyState.accordion.testExecutions": "Test executions",
	"executionsLandingPage.emptyState.accordion.productionExecutionsWarningTooltip": "Not all production executions are being saved. Change this in the workflow's <a href=\"#\">settings</a>",
	"executionsLandingPage.emptyState.accordion.footer": "You can change this in",
	"executionsLandingPage.emptyState.accordion.footer.settingsLink": "Workflow settings",
	"executionsLandingPage.emptyState.accordion.footer.tooltipLink": "Save your workflow",
	"executionsLandingPage.emptyState.accordion.footer.tooltipText": "in order to access workflow settings",
	"executionsLandingPage.noResults": "No executions found",
	"executionsList.activeExecutions.none": "No active executions",
	"executionsList.activeExecutions.header": "{running}/{cap} active executions",
	"executionsList.activeExecutions.tooltip": "Current active executions: {running} out of {cap}. This instance is limited to {cap} concurrent production executions.",
	"executionsList.activeExecutions.evaluationNote": "Evaluation runs appear in the list of executions but do not count towards your execution concurrency.",
	"executionsList.allWorkflows": "All Workflows",
	"executionsList.anyStatus": "Any Status",
	"executionsList.autoRefresh": "Auto refresh",
	"executionsList.canceled": "Canceled",
	"executionsList.confirmMessage.cancelButtonText": "",
	"executionsList.confirmMessage.confirmButtonText": "Yes, delete",
	"executionsList.confirmMessage.headline": "Delete Executions?",
	"executionsList.confirmMessage.message": "Are you sure that you want to delete the {count} selected execution(s)?",
	"executionsList.confirmMessage.annotationsNote": "By deleting these executions you will also remove the associated annotation data.",
	"executionsList.confirmMessage.annotatedExecutionMessage": "By deleting this you will also remove the associated annotation data. Are you sure that you want to delete the selected execution?",
	"executionsList.error": "Error",
	"executionsList.filters": "Filters",
	"executionsList.loadMore": "Load more",
	"executionsList.empty": "No executions",
	"executionsList.loadedAll": "No more executions to fetch",
	"executionsList.modes.error": "error",
	"executionsList.modes.integrated": "integrated",
	"executionsList.modes.manual": "manual",
	"executionsList.modes.retry": "retry",
	"executionsList.modes.trigger": "trigger",
	"executionsList.modes.webhook": "webhook",
	"executionsList.name": "@:_reusableBaseText.name",
	"executionsList.new": "Queued",
	"executionsList.openPastExecution": "Open Past Execution",
	"executionsList.retryExecution": "Retry execution",
	"executionsList.retryOf": "Retry of",
	"executionsList.retryWithCurrentlySavedWorkflow": "Retry with currently saved workflow (from node with error)",
	"executionsList.retryWithOriginalWorkflow": "Retry with original workflow (from node with error)",
	"executionsList.running": "Running",
	"executionsList.succeeded": "Succeeded",
	"executionsList.selectStatus": "Select Status",
	"executionsList.selectWorkflow": "Select Workflow",
	"executionsList.selectAll": "Select {count} finished execution | Select all {count} finished executions",
	"executionsList.test": "Test execution",
	"executionsList.evaluation": "Evaluation execution",
	"executionsList.showError.handleDeleteSelected.title": "Problem deleting executions",
	"executionsList.showError.loadMore.title": "Problem loading executions",
	"executionsList.showError.loadWorkflows.title": "Problem loading workflows",
	"executionsList.showError.refreshData.title": "Problem loading data",
	"executionsList.showError.retryExecution.title": "Problem with retry",
	"executionsList.showError.stopExecution.title": "Problem stopping execution",
	"executionsList.showMessage.handleDeleteSelected.title": "Execution deleted",
	"executionsList.showMessage.retryError.title": "Retry unsuccessful",
	"executionsList.showMessage.retrySuccess.title": "Retry successful",
	"executionsList.showMessage.retryWaiting.title": "Retry waiting",
	"executionsList.showMessage.retryCrashed.title": "Retry crashed",
	"executionsList.showMessage.retryCanceled.title": "Retry canceled",
	"executionsList.showMessage.retryRunning.title": "Retry running",
	"executionsList.showMessage.stopExecution.message": "Execution ID {activeExecutionId}",
	"executionsList.showMessage.stopExecution.title": "Execution stopped",
	"executionsList.startedAt": "Started",
	"executionsList.trigger": "Triggered by",
	"executionsList.runTime": "Run time",
	"executionsList.startingSoon": "Starting soon",
	"executionsList.started": "{date}, {time}",
	"executionsList.id": "Exec. ID",
	"executionsList.status": "Status",
	"executionsList.statusCanceled": "Canceled",
	"executionsList.statusText": "{status} in {time}",
	"executionsList.statusTextWithoutTime": "{status}",
	"executionsList.statusRunning": "{status} for {time}",
	"executionsList.statusWaiting": "{status} until {time}",
	"executionsList.statusUnknown": "Could not complete",
	"executionsList.stopExecution": "Stop Execution",
	"executionsList.success": "Success",
	"executionsList.successRetry": "Success retry",
	"executionsList.unknown": "Could not complete",
	"executionsList.unsavedWorkflow": "[UNSAVED WORKFLOW]",
	"executionsList.waiting": "Waiting",
	"executionsList.workflowExecutions": "Executions",
	"executionsList.view": "View",
	"executionsList.stop": "Stop",
	"executionsList.statusTooltipText.waitingForWebhook": "The workflow is waiting indefinitely for an incoming webhook call.",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity": "This execution will start once concurrency capacity is available. {instance}",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity.cloud": "Your plan is limited to {concurrencyCap} concurrent production executions. {link}",
	"executionsList.statusTooltipText.waitingForConcurrencyCapacity.self": "This instance is limited to {concurrencyCap} concurrent production executions. {link}",
	"executionsList.statusTooltipText.theWorkflowIsWaitingIndefinitely": "The workflow is waiting indefinitely for an incoming webhook call.",
	"executionsList.debug.button.copyToEditor": "Copy to editor",
	"executionsList.debug.button.debugInEditor": "Debug in editor",
	"executionsList.debug.paywall.title": "Upgrade to access Debug In Editor",
	"executionsList.debug.paywall.content": "Debug in Editor allows you to debug a previous execution with the actual data pinned, right in your editor.",
	"executionsList.debug.paywall.subContent": "It's available on our Cloud plans, Enterprise and the",
	"executionsList.debug.paywall.link.text": "Registered Community Edition.",
	"executionsList.debug.paywall.link.url": "https://docs.n8n.io/hosting/community-edition-features/#registered-community-edition",
	"fromAiParametersModal.title": "Test {nodeName}",
	"fromAiParametersModal.execute": "Execute step",
	"fromAiParametersModal.description": "Provide the data that would normally come from the \"{parentNodeName}\" node",
	"fromAiParametersModal.cancel": "Cancel",
	"workerList.pageTitle": "Workers",
	"workerList.empty": "No workers are responding or available",
	"workerList.item.lastUpdated": "Last updated",
	"workerList.item.jobList.empty": "No current jobs",
	"workerList.item.jobListTitle": "Current Jobs",
	"workerList.item.netListTitle": "Network Interfaces",
	"workerList.item.chartsTitle": "Performance Monitoring",
	"workerList.item.copyAddressToClipboard": "Address copied to clipboard",
	"workerList.actionBox.title": "Available on the Enterprise plan",
	"workerList.actionBox.description": "View the current state of workers connected to your instance.",
	"workerList.actionBox.description.link": "More info",
	"workerList.actionBox.buttonText": "See plans",
	"workerList.docs.url": "https://docs.n8n.io/hosting/scaling/queue-mode/#view-running-workers",
	"executionSidebar.executionName": "Execution {id}",
	"executionSidebar.searchPlaceholder": "Search executions...",
	"executionView.onPaste.title": "Cannot paste here",
	"executionView.onPaste.message": "This view is read-only. Switch to <i>Workflow</i> tab to be able to edit the current workflow",
	"executionView.notFound.message": "Execution with id '{executionId}' could not be found!",
	"executionAnnotationView.data.notFound": "Show important data from executions here by adding an <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executiondata/\">execution data</a> node to your workflow",
	"executionAnnotationView.vote.error": "Unable to save annotation vote",
	"executionAnnotationView.vote.up": "Vote up",
	"executionAnnotationView.vote.down": "Vote down",
	"executionAnnotationView.vote.removeUp": "Remove up vote",
	"executionAnnotationView.vote.removeDown": "Remove down vote",
	"executionAnnotationView.tag.error": "Unable to save annotation tags",
	"executionAnnotationView.addTag": "Add tag",
	"executionAnnotationView.chooseOrCreateATag": "Choose or create a tag",
	"executionsFilter.annotation.tags": "Execution tags",
	"executionsFilter.annotation.rating": "Rating",
	"executionsFilter.annotation.rating.all": "Any rating",
	"executionsFilter.annotation.rating.good": "Good",
	"executionsFilter.annotation.rating.bad": "Bad",
	"executionsFilter.annotation.selectVoteFilter": "Select Rating",
	"executionsFilter.selectStatus": "Select Status",
	"executionsFilter.selectWorkflow": "Select Workflow",
	"executionsFilter.start": "Execution start",
	"executionsFilter.startDate": "Earliest",
	"executionsFilter.endDate": "Latest",
	"executionsFilter.savedData": "Highlighted data",
	"executionsFilter.savedDataExactMatch": "Exact match",
	"executionsFilter.savedDataKey": "Key",
	"executionsFilter.savedDataKeyPlaceholder": "ID",
	"executionsFilter.savedDataValue": "Value",
	"executionsFilter.savedDataValuePlaceholder": "123",
	"executionsFilter.reset": "Reset all",
	"executionsFilter.customData.inputTooltip": "Upgrade plan to filter executions by custom data set at runtime. {link}",
	"executionsFilter.customData.inputTooltip.link": "View plans",
	"executionsFilter.customData.docsTooltip": "Filter executions by data you have saved in them using an ‘Execution Data’ node. {link}",
	"executionsFilter.customData.docsTooltip.link": "More info",
	"expressionEdit.anythingInside": "Anything inside ",
	"expressionEdit.isJavaScript": " is JavaScript.",
	"expressionEdit.learnMore": "Learn more",
	"expressionEdit.editExpression": "Edit Expression",
	"expressionEdit.expression": "Expression",
	"expressionEdit.resultOfItem1": "Result of item 1",
	"expressionEditor.uncalledFunction": "[this is a function, please add ()]",
	"expressionModalInput.empty": "[empty]",
	"expressionModalInput.undefined": "[undefined]",
	"expressionModalInput.null": "null",
	"expressionTip.noExecutionData": "Execute previous nodes to use input data",
	"expressionTip.typeDotPrimitive": "Type <code>.</code> for data transformation options. <a target=\"_blank\" href=\"https://docs.n8n.io/code/builtin/data-transformation-functions/\">Learn more</a>",
	"expressionTip.typeDotObject": "Type <code>.</code> for data transformation options, or to access fields. <a target=\"_blank\" href=\"https://docs.n8n.io/code/builtin/data-transformation-functions/\">Learn more</a>",
	"expressionTip.javascript": "Anything inside <code>{'{{ }}'}</code> is JavaScript. <a target=\"_blank\" href=\"https://docs.n8n.io/code-examples/expressions/\">Learn more</a>",
	"expressionModalInput.noExecutionData": "Execute previous nodes for preview",
	"expressionModalInput.noNodeExecutionData": "Execute node ‘{node}’ for preview",
	"expressionModalInput.noInputConnection": "No input connected",
	"expressionModalInput.pairedItemConnectionError": "No path back to node",
	"expressionModalInput.pairedItemInvalidPinnedError": "Unpin node ‘{node}’ and execute",
	"expressionModalInput.pairedItemError": "Can’t determine which item to use",
	"expressionModalInput.pairedItemError.noRunData": "Can't determine which item to use - execute node for more info",
	"fixedCollectionParameter.choose": "Choose...",
	"fixedCollectionParameter.currentlyNoItemsExist": "Currently no items exist",
	"fixedCollectionParameter.deleteItem": "Delete item",
	"fixedCollectionParameter.dragItem": "Drag item",
	"fixedCollectionParameter.moveDown": "Move down",
	"fixedCollectionParameter.moveUp": "Move up",
	forgotPassword,
	"forgotPassword.emailSentIfExists": "We’ve emailed {email} (if there’s a matching account)",
	"forgotPassword.getRecoveryLink": "Email me a recovery link",
	"forgotPassword.noSMTPToSendEmailWarning": "Please contact your admin. n8n isn’t set up to send email right now.",
	"forgotPassword.recoverPassword": "Recover password",
	"forgotPassword.recoveryEmailSent": "Recovery email sent",
	"forgotPassword.returnToSignIn": "Back to sign in",
	"forgotPassword.sendingEmailError": "Problem sending email",
	"forgotPassword.ldapUserPasswordResetUnavailable": "Please contact your LDAP administrator to reset your password",
	"forgotPassword.oidcUserPasswordResetUnavailable": "Please contact your OIDC administrator to reset your password",
	"forgotPassword.smtpErrorContactAdministrator": "Please contact your administrator (problem with your SMTP setup)",
	"forgotPassword.tooManyRequests": "You’ve reached the password reset limit. Please try again in a few minutes.",
	"forms.resourceFiltersDropdown.filters": "Filters",
	"forms.resourceFiltersDropdown.owner": "Owner",
	"forms.resourceFiltersDropdown.owner.placeholder": "Filter by owner",
	"forms.resourceFiltersDropdown.reset": "Reset all",
	"folders.actions.create": "Create folder inside",
	"folders.actions.create.workflow": "Create workflow inside",
	"folders.actions.moveToFolder": "Move",
	"folders.add": "Add folder",
	"folders.add.here.message": "Create a new folder here",
	"folders.add.to.parent.message": "Create folder in '{parent}'",
	"folders.add.overview.community.message": "Folders available in your personal space",
	"folders.add.overview.withProjects.message": "Folders available in projects or your personal space",
	"folders.add.success.title": "Folder created",
	"folders.add.success.message": "Created new folder '{folderName}'<br><a href=\"{link}\">Open folder</a>",
	"folders.invalidName.empty.message": "Folder name cannot be empty",
	"folders.invalidName.tooLong.message": "Folder name cannot be longer than {maxLength} characters",
	"folders.invalidName.invalidCharacters.message": "Folder name cannot contain the following characters: {illegalChars}",
	"folders.invalidName.starts.with.dot..message": "Folder name cannot start with a dot",
	"folders.invalidName.only.dots.message": "Folder name cannot contain only dots",
	"folders.delete.confirm.title": "Delete '{folderName}'",
	"folders.delete.typeToConfirm": "delete {folderName}",
	"folders.delete.confirm.message": "Are to sure you want to delete this folder?",
	"folders.delete.success.message": "Folder deleted",
	"folder.delete.modal.confirmation": "What should we do with {folders} {workflows} in this folder?",
	"folder.count": "the {count} folder | the {count} folders",
	"workflow.count": "the {count} workflow | the {count} workflows",
	"folder.and.workflow.separator": "and",
	"folders.delete.action": "Archive all workflows and delete subfolders",
	"folders.delete.error.message": "Problem while deleting folder",
	"folders.delete.confirmation.message": "Type 'delete {folderName}' to confirm",
	"folders.transfer.confirm.message": "Data transferred to '{folderName}'",
	"folders.transfer.action": "Transfer workflows and subfolders to another folder inside '{projectName}'",
	"folders.transfer.action.noProject": "Transfer workflows and subfolders to another folder",
	"folders.transfer.selectFolder": "Folder to transfer to",
	"folders.transfer.select.placeholder": "Select folder",
	"folders.rename.message": "Rename '{folderName}'",
	"folders.rename.error.title": "Problem renaming folder",
	"folders.rename.success.message": "Folder renamed",
	"folders.rename.placeholder": "Enter new folder name",
	"folders.not.found.message": "Folder not found",
	"folders.move.modal.folder.count": "{count} folder | {count} folders",
	"folders.move.modal.workflow.count": "{count} workflow | {count} workflows",
	"folders.move.modal.title": "Move {resourceTypeLabel} {folderName}",
	"folders.move.modal.description": "This will also move{folders}{workflows}.",
	"folders.move.modal.confirm": "Move {resourceTypeLabel}",
	"folders.move.modal.project.label": "Project or user",
	"folders.move.modal.project.placeholder": "Select a project or user",
	"folders.move.modal.folder.label": "Folder",
	"folders.move.modal.folder.placeholder": "Select a folder",
	"folders.move.modal.folder.noData.label": "No folders found",
	"folders.move.modal.message.usedCredentials.workflow": "Also share the {usedCredentials} used by this workflow to ensure it will continue to run correctly",
	"folders.move.modal.message.usedCredentials.folder": "Also share the {usedCredentials} used by these workflows to keep them running correctly",
	"folders.move.modal.message.usedCredentials.warning": "Workflow may not execute correctly if you choose not to share the credentials.",
	"folders.move.success.title": "Successfully moved folder",
	"folders.move.success.message": "<b>{folderName}</b> has been moved to <b>{newFolderName}</b>, along with all its workflows and subfolders.<br/><br/><a href=\"{link}\">View {newFolderName}</a>",
	"folders.move.success.messageNoAccess": "<b>{folderName}</b> has been moved to <b>{newFolderName}</b>, along with all its workflows and subfolders.",
	"folders.move.error.title": "Problem moving folder",
	"folders.move.workflow.error.title": "Problem moving workflow",
	"folders.move.workflow.success.title": "Successfully moved workflow",
	"folders.move.workflow.success.message": "<b>{workflowName}</b> has been moved to <b>{newFolderName}</b>.<br/><br/><a href=\"{link}\">View {newFolderName}</a>",
	"folders.move.workflow.success.messageNoAccess": "<b>{workflowName}</b> has been moved to <b>{newFolderName}</b>.",
	"folders.move.project.root.name": "No folder (project root)",
	"folders.open.error.title": "Problem opening folder",
	"folders.create.error.title": "Problem creating folder",
	"folders.empty.actionbox.title": "Nothing in folder \"{folderName}\" yet",
	"folders.registeredCommunity.cta.heading": "Get access to folders with registered community",
	"folders.breadcrumbs.noTruncated.message": "No hidden items in path",
	"generic.oauth1Api": "OAuth1 API",
	"generic.oauth2Api": "OAuth2 API",
	"genericHelpers.loading": "Loading",
	"genericHelpers.hrsShort": "h",
	"genericHelpers.min": "min",
	"genericHelpers.minShort": "m",
	"genericHelpers.sec": "sec",
	"genericHelpers.secShort": "s",
	"genericHelpers.millis": "ms",
	"readOnly.showMessage.executions.message": "Executions are read-only. Make changes from the <b>Workflow</b> tab.",
	"readOnly.showMessage.executions.title": "Cannot edit execution",
	"readOnlyEnv.showMessage.executions.message": "Executions are read-only.",
	"readOnlyEnv.showMessage.executions.title": "Cannot edit execution",
	"readOnlyEnv.showMessage.workflows.message": "Workflows are read-only in protected instances.",
	"readOnlyEnv.showMessage.workflows.title": "Cannot edit workflow",
	"readOnlyEnv.tooltip": "This is a protected instance where modifications are restricted. {link}",
	"readOnlyEnv.tooltip.link": "More info.",
	"readOnlyEnv.cantAdd.workflow": "You can't add new workflows to a protected n8n instance",
	"readOnlyEnv.cantAdd.credential": "You can't add new credentials to a protected n8n instance",
	"readOnlyEnv.cantAdd.project": "You can't add new projects to a protected n8n instance",
	"readOnlyEnv.cantAdd.any": "You can't create new workflows or credentials on a protected n8n instance",
	"readOnlyEnv.cantEditOrRun": "This workflow can't be edited or run manually because it's on a protected instance",
	"logs.overview.header.title": "Logs",
	"logs.overview.header.actions.clearExecution": "Clear execution",
	"logs.overview.header.actions.clearExecution.tooltip": "Clear execution data",
	"logs.overview.header.switch.details": "Details",
	"logs.overview.header.switch.overview": "Overview",
	"logs.overview.body.empty.message": "Nothing to display yet. Execute the workflow to see execution logs.",
	"logs.overview.body.empty.action": "Execute the workflow",
	"logs.overview.body.summaryText.for": "{status} for {time}",
	"logs.overview.body.summaryText.in": "{status} in {time}",
	"logs.overview.body.started": "Started {time}",
	"logs.overview.body.run": "Execute step",
	"logs.overview.body.open": "Open...",
	"logs.overview.body.toggleRow": "Toggle row",
	"logs.details.header.actions.input": "Input",
	"logs.details.header.actions.output": "Output",
	"logs.details.body.itemCount": "{count} item | {count} items",
	"logs.details.body.multipleInputs": "Multiple inputs. View them by {button}",
	"logs.details.body.multipleInputs.openingTheNode": "opening the node",
	"mainSidebar.aboutN8n": "About n8n",
	"mainSidebar.confirmMessage.workflowArchive.cancelButtonText": "",
	"mainSidebar.confirmMessage.workflowArchive.confirmButtonText": "Yes, archive",
	"mainSidebar.confirmMessage.workflowArchive.headline": "Archive Workflow?",
	"mainSidebar.confirmMessage.workflowArchive.message": "Are you sure that you want to archive '{workflowName}'?",
	"mainSidebar.confirmMessage.workflowDelete.cancelButtonText": "",
	"mainSidebar.confirmMessage.workflowDelete.confirmButtonText": "Yes, delete",
	"mainSidebar.confirmMessage.workflowDelete.headline": "Delete Workflow?",
	"mainSidebar.confirmMessage.workflowDelete.message": "Are you sure that you want to delete '{workflowName}' permanently?",
	"mainSidebar.credentials": "Credentials",
	"mainSidebar.variables": "Variables",
	"mainSidebar.help": "Help",
	"mainSidebar.helpMenuItems.course": "Course",
	"mainSidebar.helpMenuItems.documentation": "Documentation",
	"mainSidebar.helpMenuItems.forum": "Forum",
	"mainSidebar.helpMenuItems.quickstart": "Quickstart",
	"mainSidebar.helpMenuItems.reportBug": "Report a bug",
	"mainSidebar.new": "New",
	"mainSidebar.newTemplate": "New from template",
	"mainSidebar.open": "Open",
	"mainSidebar.prompt.cancel": "@:_reusableBaseText.cancel",
	"mainSidebar.prompt.import": "Import",
	"mainSidebar.prompt.importWorkflowFromUrl": "Import Workflow from URL",
	"mainSidebar.prompt.invalidUrl": "Invalid URL",
	"mainSidebar.prompt.workflowUrl": "Workflow URL",
	"mainSidebar.save": "@:_reusableBaseText.save",
	"mainSidebar.showError.stopExecution.title": "Problem stopping execution",
	"mainSidebar.showMessage.handleFileImport.message": "The file does not contain valid JSON data",
	"mainSidebar.showMessage.handleFileImport.title": "Could not import file",
	"mainSidebar.showMessage.handleSelect1.title": "Workflow '{workflowName}' deleted",
	"mainSidebar.showMessage.handleSelect2.title": "Workflow created",
	"mainSidebar.showMessage.handleSelect3.title": "Workflow created",
	"mainSidebar.showMessage.handleArchive.title": "Workflow '{workflowName}' archived",
	"mainSidebar.showMessage.handleUnarchive.title": "Workflow '{workflowName}' unarchived",
	"mainSidebar.showMessage.stopExecution.title": "Execution stopped",
	"mainSidebar.templates": "Templates",
	"mainSidebar.workflows": "Workflows",
	"mainSidebar.workflows.readOnlyEnv.tooltip": "Protected instances prevent editing workflows (recommended for production environments). {link}",
	"mainSidebar.workflows.readOnlyEnv.tooltip.link": "More info",
	"mainSidebar.executions": "Executions",
	"mainSidebar.workersView": "Workers",
	"mainSidebar.whatsNew": "What’s New",
	"mainSidebar.whatsNew.fullChangelog": "Full changelog",
	"mcp.workflowNotEligable.description": "Only active, webhook-triggered workflows can be accessible through MCP",
	"mcp.workflowDeactivated.title": "MCP Access Disabled",
	"mcp.productionCheklist.title": "Enable MCP access",
	"mcp.productionCheklist.description": "Allow MCP clients to access this workflow",
	"mcp.workflowDeactivated.message": "MCP Access has been disabled for this workflow because it is deactivated.",
	"menuActions.duplicate": "Duplicate",
	"menuActions.download": "Download",
	"menuActions.push": "Push to Git",
	"menuActions.importFromUrl": "Import from URL...",
	"menuActions.importFromFile": "Import from File...",
	"menuActions.delete": "Delete",
	"menuActions.archive": "Archive",
	"menuActions.unarchive": "Unarchive",
	"multipleParameter.addItem": "Add item",
	"multipleParameter.currentlyNoItemsExist": "Currently no items exist",
	"multipleParameter.deleteItem": "Delete item",
	"multipleParameter.moveDown": "Move down",
	"multipleParameter.moveUp": "Move up",
	"ndv.backToCanvas": "Back to canvas",
	"ndv.backToCanvas.waitingForTriggerWarning": "Waiting for a Trigger node to execute. Close this view to see the Workflow Canvas.",
	"ndv.close.tooltip": "Data stored, safe to close",
	"ndv.execute.testNode": "Execute step",
	"ndv.execute.testNode.description": "Runs the current node. Will also run previous nodes if they have not been run yet",
	"ndv.execute.generateCodeAndTestNode.description": "Generates code and then runs the current node",
	"ndv.execute.generateCode.message": "The instructions in '{nodeName}' have changed",
	"ndv.execute.generateCode.title": "Generating transformation code",
	"ndv.execute.executing": "Executing",
	"ndv.execute.fetchEvent": "Fetch Test Event",
	"ndv.execute.fixPrevious": "Fix previous node first",
	"ndv.execute.generatingCode": "Generating code from instructions",
	"ndv.execute.listenForTestEvent": "Listen for test event",
	"ndv.execute.testChat": "Test chat",
	"ndv.execute.testStep": "Execute step",
	"ndv.execute.stopListening": "Stop Listening",
	"ndv.execute.nodeIsDisabled": "Enable node to execute",
	"ndv.execute.requiredFieldsMissing": "Complete required fields first",
	"ndv.execute.stopWaitingForWebhook.error": "Problem deleting test webhook",
	"ndv.execute.workflowAlreadyRunning": "Workflow is already running",
	"ndv.execute.deactivated": "This node is deactivated and can't be run",
	"ndv.featureRequest": "I wish this node would...",
	"ndv.input": "Input",
	"ndv.input.nodeDistance": "{count} node back | {count} nodes back",
	"ndv.input.noNodesFound": "No nodes found",
	"ndv.input.mapping": "Mapping",
	"ndv.input.fromAI": "From AI",
	"ndv.input.parentNodes": "Parent nodes",
	"ndv.input.tooMuchData.title": "Display data?",
	"ndv.input.noOutputDataInBranch": "No input data in this branch",
	"ndv.input.noOutputDataInNode": "Node did not output any data. n8n stops executing the workflow when a node has no output data.",
	"ndv.input.noOutputData": "No data",
	"ndv.input.noOutputData.executePrevious": "Execute previous nodes",
	"ndv.input.noOutputData.title": "No input data yet",
	"ndv.input.noOutputData.v2.title": "No input data",
	"ndv.input.noOutputData.v2.description": "{link} to view input data",
	"ndv.input.noOutputData.v2.action": "Execute previous nodes",
	"ndv.input.noOutputData.v2.tooltip": "From the earliest node which is unexecuted, or is executed but has since been changed",
	"ndv.input.noOutputData.hint": "(From the earliest node that needs it {info} )",
	"ndv.input.noOutputData.hint.tooltip": "From the earliest node which is unexecuted, or is executed but has since been changed",
	"ndv.input.noOutputData.schemaPreviewHint": "switch to {schema} to use the schema preview",
	"ndv.input.noOutputData.or": "or",
	"ndv.input.noOutputData.embeddedNdv.link": "Execute previous nodes",
	"ndv.input.noOutputData.embeddedNdv.description": "{link} to use their data here",
	"ndv.input.executingPrevious": "Executing previous nodes...",
	"ndv.input.notConnected.title": "Wire me up",
	"ndv.input.notConnected.v2.title": "No input connected",
	"ndv.input.notConnected.v2.description": "This node can only receive input data if you connect it to another node. {link}",
	"ndv.input.notConnected.message": "This node can only receive input data if you connect it to another node.",
	"ndv.input.notConnected.learnMore": "Learn more",
	"ndv.input.disabled": "The '{nodeName}' node is disabled and won’t execute.",
	"ndv.input.disabled.cta": "Enable it",
	"ndv.input.rootNodeHasNotRun.title": "Parent node hasn’t run yet",
	"ndv.input.rootNodeHasNotRun.description": "Inputs that the parent node sends to this one will appear here. To map data in from previous nodes, use the {link} view.",
	"ndv.input.rootNodeHasNotRun.description.link": "mapping",
	"ndv.output": "Output",
	"ndv.output.ai.empty": "👈 Use these logs to see information on how the {node} node completed processing. You can click on a node to see the input it received and data it output.",
	"ndv.output.ai.waiting": "Waiting for message",
	"ndv.output.outType.logs": "Logs",
	"ndv.output.outType.regular": "Output",
	"ndv.output.edit": "Edit Output",
	"ndv.output.all": "all",
	"ndv.output.branch": "Branch",
	"ndv.output.executing": "Executing node...",
	"ndv.output.items": "{count} item | {count} items",
	"ndv.output.itemsTotal": "{count} item total | {count} items total",
	"ndv.output.andSubExecutions": ", {count} sub-execution | , {count} sub-executions",
	"ndv.output.noOutputData.message": "n8n stops executing the workflow when a node has no output data. You can change this default behaviour via",
	"ndv.output.noOutputData.message.settings": "Settings",
	"ndv.output.noOutputData.message.settingsOption": "> \"Always Output Data\".",
	"ndv.output.noOutputData.title": "No output data returned",
	"ndv.output.noOutputData.v2.title": "No output data",
	"ndv.output.noOutputData.v2.description": "{link} to view output data",
	"ndv.output.noOutputData.v2.action": "Execute step",
	"ndv.output.noOutputData.trigger.title": "No trigger output",
	"ndv.output.noOutputData.trigger.action": "Test this trigger",
	"ndv.output.noOutputDataInBranch": "No output data in this branch",
	"ndv.output.of": "{current} of {total}",
	"ndv.output.pageSize": "Page Size",
	"ndv.output.run": "Run",
	"ndv.output.runNodeHint": "Execute this node to view data",
	"ndv.output.runNodeHintSubNode": "Output will appear here once the parent node is run",
	"ndv.output.githubNodeWaitingForWebhook": "Execution will continue when the following webhook URL is called: ",
	"ndv.output.sendAndWaitWaitingApproval": "Execution will continue after the user's response",
	"ndv.output.waitNodeWaiting.title": "Waiting for input",
	"ndv.output.waitNodeWaiting.description.webhook": "Execution will continue when webhook is received on ",
	"ndv.output.waitNodeWaiting.description.form": "Execution will continue when form is submitted on ",
	"ndv.output.waitNodeWaiting.description.timer": "Execution will continue when wait time is over",
	"ndv.output.insertTestData": "set mock data",
	"ndv.output.staleDataWarning.regular": "Node parameters have changed.<br>Test node again to refresh output.",
	"ndv.output.staleDataWarning.pinData": "Node parameter changes will not affect pinned output data.",
	"ndv.output.tooMuchData.message": "The node contains {size} MB of data. Displaying it may slow down your browser temporarily.",
	"ndv.output.tooMuchData.showDataAnyway": "Show data",
	"ndv.output.tooMuchData.title": "Display data?",
	"ndv.output.waitingToRun": "Waiting to execute...",
	"ndv.output.noToolUsedInfo": "None of your tools were used in this run. Try giving your tools clearer names and descriptions to help the AI",
	"ndv.title.cancel": "Cancel",
	"ndv.title.rename": "Rename",
	"ndv.title.rename.placeholder": "Enter new name...",
	"ndv.title.renameNode": "Rename node",
	"ndv.pinData.pin.title": "Pin data",
	"ndv.pinData.pin.description": "Node will always output current data instead of executing. Doesn't apply to production executions.",
	"ndv.pinData.pin.binary": "Pin Data is disabled as this node's output contains binary data.",
	"ndv.pinData.pin.link": "More info",
	"ndv.pinData.unpin.title": "Unpin data",
	"ndv.pinData.pin.multipleRuns.title": "Run #{index} was pinned",
	"ndv.pinData.pin.multipleRuns.description": "This run will be outputted each time the node is run.",
	"ndv.pinData.unpinAndExecute.title": "Unpin output data?",
	"ndv.pinData.unpinAndExecute.description": "Testing a node overwrites pinned data.",
	"ndv.pinData.unpinAndExecute.cancel": "Cancel",
	"ndv.pinData.unpinAndExecute.confirm": "Unpin and test",
	"ndv.pinData.beforeClosing.title": "Save output changes before closing?",
	"ndv.pinData.beforeClosing.cancel": "Discard",
	"ndv.pinData.beforeClosing.confirm": "Save",
	"ndv.pinData.error.syntaxError.title": "Unable to save due to invalid JSON",
	"ndv.pinData.error.tooLarge.title": "Unable to pin data due to size limit",
	"ndv.pinData.error.tooLarge.description": "Workflow has reached the maximum allowed pinned data size ({size} mb / {limit} mb)",
	"ndv.pinData.error.tooLargeWorkflow.title": "Unable to pin data due to size limit",
	"ndv.pinData.error.tooLargeWorkflow.description": "Workflow has reached the maximum allowed size ({size} mb / {limit} mb)",
	"ndv.httpRequest.credentialOnly.docsNotice": "Use the <a target=\"_blank\" href=\"{docsUrl}\">{nodeName} docs</a> to construct your request. We'll take care of the authentication part if you add a {nodeName} credential below.",
	"noTagsView.readyToOrganizeYourWorkflows": "Ready to organize your workflows?",
	"noTagsView.withWorkflowTagsYouReFree": "With workflow tags, you're free to create the perfect tagging system for your flows",
	"noAnnotationTagsView.title": "Organize your executions",
	"noAnnotationTagsView.description": "Execution tags help you label and identify different classes of execution. Plus once you tag an execution, it’s never deleted",
	"node.thisIsATriggerNode": "This is a Trigger node. <a target=\"_blank\" href=\"https://docs.n8n.io/workflows/components/nodes/\">Learn more</a>",
	"node.activateDeactivateNode": "Activate/Deactivate Node",
	"node.changeColor": "Change color",
	"node.disabled": "Deactivated",
	"node.testStep": "Execute step",
	"node.disable": "Deactivate",
	"node.enable": "Activate",
	"node.delete": "Delete",
	"node.add": "Add",
	"node.issues": "Issues",
	"node.install-to-use": "Install the package to use this node",
	"node.dirty": "Node configuration changed. Output data may change when this node is run again",
	"node.subjectToChange": "Because of changes in the workflow, output data may change when this node is run again",
	"node.nodeIsExecuting": "Node is executing",
	"node.nodeIsWaitingTill": "Node is waiting until {date} {time}",
	"node.theNodeIsWaitingIndefinitelyForAnIncomingWebhookCall": "The node is waiting for an incoming webhook call (indefinitely)",
	"node.theNodeIsWaitingWebhookCall": "The node is waiting for an incoming webhook call",
	"node.theNodeIsWaitingFormCall": "The node is waiting for a form submission",
	"node.theNodeIsWaitingUserInput": "The node is waiting for user input",
	"node.waitingForYouToCreateAnEventIn": "Waiting for you to create an event in {nodeType}",
	"node.discovery.pinData.canvas": "You can pin this output instead of waiting for a test event. Open node to do so.",
	"node.discovery.pinData.ndv": "You can pin this output instead of waiting for a test event.",
	"node.executionError.openNode": "Open node",
	"node.settings.continuesOnError": "Execution will continue even if the node fails",
	"node.settings.continuesOnError.title": "Continue On Fail",
	"node.settings.retriesOnFailure": "This node will automatically retry if it fails",
	"node.settings.executeOnce": "This node executes only once, no matter how many input items there are",
	"node.settings.alwaysOutputData": "This node will output an empty item if nothing would normally be returned",
	"nodeBase.clickToAddNodeOrDragToConnect": "Click to add node \n or drag to connect",
	"nodeCreator.actionsPlaceholderNode.scheduleTrigger": "On a Schedule",
	"nodeCreator.actionsPlaceholderNode.webhook": "On a Webhook call",
	"nodeCreator.actionsCategory.actions": "Actions",
	"nodeCreator.actionsCategory.onNewEvent": "On new {event} event",
	"nodeCreator.actionsCategory.onEvent": "On {event}",
	"nodeCreator.actionsCategory.triggers": "Triggers",
	"nodeCreator.actionsCategory.triggerNodes": "Trigger Nodes",
	"nodeCreator.actionsCategory.regularNodes": "Regular Nodes",
	"nodeCreator.actionsCategory.regularAndTriggers": "Regular & Trigger Nodes",
	"nodeCreator.actionsCategory.searchActions": "Search {node} Actions...",
	"nodeCreator.actionsCategory.noMatchingActions": "No matching Actions. <i>Reset search</i>",
	"nodeCreator.actionsCategory.noMatchingTriggers": "No matching Triggers. <i>Reset search</i>",
	"nodeCreator.actionsList.apiCall": "Didn't find the right event? Make a <a data-action='addHttpNode'>custom {node} API call</a>",
	"nodeCreator.actionsCallout.noActionItems": "We don't have <strong>{nodeName}</strong> actions yet. Have one in mind? Make a <a target=\"_blank\" href=\"https://community.n8n.io/c/feature-requests/5\"> request in our community</a>",
	"nodeCreator.actionsCallout.triggersStartWorkflow": "Actions need to be triggered by another node, e.g. at regular intervals with the <strong>Schedule</strong> node. <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\"> Learn more</a>",
	"nodeCreator.actionsTooltip.triggersStartWorkflow": "A trigger is a step that starts your workflow. <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\"> Learn more</a>",
	"nodeCreator.actionsTooltip.actionsPerformStep": "Actions perform a step once your workflow has already started. <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/builtin/\"> Learn more</a>",
	"nodeCreator.actionsCallout.noTriggerItems": "No <strong>{nodeName}</strong> Triggers available. Users often combine the following Triggers with <strong>{nodeName}</strong> Actions.",
	"nodeCreator.categoryNames.otherCategories": "Results in other categories",
	"nodeCreator.categoryNames.moreFromCommunity": "More from the community",
	"nodeCreator.subnodes": "sub-nodes",
	"nodeCreator.noResults.dontWorryYouCanProbablyDoItWithThe": "Don’t worry, you can probably do it with the",
	"nodeCreator.noResults.httpRequest": "HTTP Request",
	"nodeCreator.noResults.node": "node",
	"nodeCreator.noResults.or": "or",
	"nodeCreator.noResults.requestTheNode": "Request the node",
	"nodeCreator.noResults.wantUsToMakeItFaster": "Want us to make it faster?",
	"nodeCreator.noResults.weDidntMakeThatYet": "We didn't make that... yet",
	"nodeCreator.noResults.webhook": "Webhook",
	"nodeCreator.ragStarterTemplate.openTemplateItem.title": "RAG starter template",
	"nodeCreator.ragStarterTemplate.openTemplateItem.description": "Get a feel for vector stores in n8n",
	"nodeCreator.searchBar.searchNodes": "Search nodes...",
	"nodeCreator.subcategoryDescriptions.appTriggerNodes": "Runs the flow when something happens in an app like Telegram, Notion or Airtable",
	"nodeCreator.subcategoryDescriptions.appRegularNodes": "Do something in an app or service like Google Sheets, Telegram or Notion",
	"nodeCreator.subcategoryDescriptions.dataTransformation": "Manipulate, filter or convert data",
	"nodeCreator.subcategoryDescriptions.files": "CSV, XLS, XML, text, images, etc.",
	"nodeCreator.subcategoryDescriptions.flow": "Branch, merge or loop the flow, etc.",
	"nodeCreator.subcategoryDescriptions.helpers": "Run code, make HTTP requests, set webhooks, etc.",
	"nodeCreator.subcategoryDescriptions.otherTriggerNodes": "Runs the flow on workflow errors, file changes, etc.",
	"nodeCreator.subcategoryDescriptions.agents": "Autonomous entities that interact and make decisions.",
	"nodeCreator.subcategoryDescriptions.chains": "Structured assemblies for specific tasks.",
	"nodeCreator.subcategoryDescriptions.documentLoaders": "Handles loading of documents for processing.",
	"nodeCreator.subcategoryDescriptions.embeddings": "Transforms text into vector representations.",
	"nodeCreator.subcategoryDescriptions.languageModels": "AI models that understand and generate language.",
	"nodeCreator.subcategoryDescriptions.memory": "Manages storage and retrieval of information during execution.",
	"nodeCreator.subcategoryDescriptions.outputParsers": "Ensures the output adheres to a defined format.",
	"nodeCreator.subcategoryDescriptions.retrievers": "Fetches relevant information from a source.",
	"nodeCreator.subcategoryDescriptions.textSplitters": "Breaks down text into smaller parts.",
	"nodeCreator.subcategoryDescriptions.tools": "Utility components providing various functionalities.",
	"nodeCreator.subcategoryDescriptions.vectorStores": "Handles storage and retrieval of vector representations.",
	"nodeCreator.subcategoryDescriptions.miscellaneous": "Other AI related nodes.",
	"nodeCreator.subcategoryDescriptions.humanInTheLoop": "Wait for approval or human input before continuing",
	"nodeCreator.subcategoryInfos.languageModels": "Chat models are designed for interactive conversations and follow instructions well, while text completion models focus on generating continuations of a given text input",
	"nodeCreator.subcategoryInfos.memory": "Memory allows an AI model to remember and reference past interactions with it",
	"nodeCreator.subcategoryInfos.vectorStores": "Vector stores allow an AI model to reference relevant pieces of documents, useful for question answering and document search",
	"nodeCreator.subcategoryNames.appTriggerNodes": "On app event",
	"nodeCreator.subcategoryNames.appRegularNodes": "Action in an app",
	"nodeCreator.subcategoryNames.dataTransformation": "Data transformation",
	"nodeCreator.subcategoryNames.files": "Files",
	"nodeCreator.subcategoryNames.flow": "Flow",
	"nodeCreator.subcategoryNames.helpers": "Core",
	"nodeCreator.subcategoryNames.otherTriggerNodes": "Other ways...",
	"nodeCreator.subcategoryNames.agents": "Agents",
	"nodeCreator.subcategoryNames.chains": "Chains",
	"nodeCreator.subcategoryNames.documentLoaders": "Document Loaders",
	"nodeCreator.subcategoryNames.embeddings": "Embeddings",
	"nodeCreator.subcategoryNames.languageModels": "Language Models",
	"nodeCreator.subcategoryNames.memory": "Memory",
	"nodeCreator.subcategoryNames.outputParsers": "Output Parsers",
	"nodeCreator.subcategoryNames.retrievers": "Retrievers",
	"nodeCreator.subcategoryNames.textSplitters": "Text Splitters",
	"nodeCreator.subcategoryNames.tools": "Tools",
	"nodeCreator.subcategoryNames.vectorStores": "Vector Stores",
	"nodeCreator.subcategoryNames.miscellaneous": "Miscellaneous",
	"nodeCreator.subcategoryNames.humanInTheLoop": "Human in the loop",
	"nodeCreator.sectionNames.popular": "Popular",
	"nodeCreator.sectionNames.other": "Other",
	"nodeCreator.sectionNames.sendAndWait": "Send and wait for response",
	"nodeCreator.sectionNames.transform.combine": "Combine items",
	"nodeCreator.sectionNames.transform.addOrRemove": "Add or remove items",
	"nodeCreator.sectionNames.transform.convert": "Convert data",
	"nodeCreator.triggerHelperPanel.addAnotherTrigger": "Add another trigger",
	"nodeCreator.triggerHelperPanel.addAnotherTriggerDescription": "Triggers start your workflow. Workflows can have multiple triggers.",
	"nodeCreator.triggerHelperPanel.title": "When should this workflow run?",
	"nodeCreator.triggerHelperPanel.scheduleTriggerDisplayName": "On a schedule",
	"nodeCreator.triggerHelperPanel.scheduleTriggerDescription": "Runs the flow every day, hour, or custom interval",
	"nodeCreator.triggerHelperPanel.webhookTriggerDisplayName": "On webhook call",
	"nodeCreator.triggerHelperPanel.webhookTriggerDescription": "Runs the flow on receiving an HTTP request",
	"nodeCreator.triggerHelperPanel.formTriggerDisplayName": "On form submission",
	"nodeCreator.triggerHelperPanel.formTriggerDescription": "Generate webforms in n8n and pass their responses to the workflow",
	"nodeCreator.triggerHelperPanel.formDisplayName": "Form",
	"nodeCreator.triggerHelperPanel.formDescription": "Add next form page",
	"nodeCreator.triggerHelperPanel.manualTriggerDisplayName": "Trigger manually",
	"nodeCreator.triggerHelperPanel.manualTriggerDescription": "Runs the flow on clicking a button in n8n. Good for getting started quickly",
	"nodeCreator.triggerHelperPanel.manualChatTriggerDisplayName": "On chat message",
	"nodeCreator.triggerHelperPanel.manualChatTriggerDescription": "Runs the flow when a user sends a chat message. For use with AI nodes",
	"nodeCreator.triggerHelperPanel.manualTriggerTag": "Recommended",
	"nodeCreator.triggerHelperPanel.chatTriggerDisplayName": "On chat message",
	"nodeCreator.triggerHelperPanel.chatTriggerDescription": "Runs the flow when a user sends a chat message. For use with AI nodes",
	"nodeCreator.triggerHelperPanel.whatHappensNext": "What happens next?",
	"nodeCreator.triggerHelperPanel.selectATrigger": "What triggers this workflow?",
	"nodeCreator.triggerHelperPanel.selectATriggerDescription": "A trigger is a step that starts your workflow",
	"nodeCreator.triggerHelperPanel.workflowTriggerDisplayName": "When executed by another workflow",
	"nodeCreator.triggerHelperPanel.workflowTriggerDescription": "Runs the flow when called by the Execute Workflow node from a different workflow",
	"nodeCreator.aiPanel.aiNodes": "AI Nodes",
	"nodeCreator.aiPanel.aiOtherNodes": "Other AI Nodes",
	"nodeCreator.aiPanel.aiOtherNodesDescription": "Embeddings, Vector Stores, LLMs and other AI nodes",
	"nodeCreator.aiPanel.selectAiNode": "Select an AI Node to add to your workflow",
	"nodeCreator.aiPanel.nodesForAi": "Build autonomous agents, summarize or search documents, etc.",
	"nodeCreator.aiPanel.newTag": "New",
	"nodeCreator.aiPanel.langchainAiNodes": "AI",
	"nodeCreator.aiPanel.title": "When should this workflow run?",
	"nodeCreator.aiPanel.linkItem.description": "See what's possible and get started 5x faster",
	"nodeCreator.aiPanel.linkItem.title": "AI Templates",
	"nodeCreator.aiPanel.scheduleTriggerDisplayName": "On a schedule",
	"nodeCreator.aiPanel.scheduleTriggerDescription": "Runs the flow every day, hour, or custom interval",
	"nodeCreator.aiPanel.webhookTriggerDisplayName": "On webhook call",
	"nodeCreator.aiPanel.webhookTriggerDescription": "Runs the flow when another app sends a webhook",
	"nodeCreator.aiPanel.manualTriggerDisplayName": "Manually",
	"nodeCreator.aiPanel.manualTriggerDescription": "Runs the flow on clicking a button in n8n",
	"nodeCreator.aiPanel.whatHappensNext": "What happens next?",
	"nodeCreator.aiPanel.selectATrigger": "Select an AI Component",
	"nodeCreator.aiPanel.selectATriggerDescription": "A trigger is a step that starts your workflow",
	"nodeCreator.aiPanel.workflowTriggerDisplayName": "When Executed by Another Workflow",
	"nodeCreator.aiPanel.workflowTriggerDescription": "Runs the flow when called by the Execute Workflow node from a different workflow",
	"nodeCreator.nodeItem.triggerIconTitle": "Trigger Node",
	"nodeCreator.nodeItem.aiIconTitle": "LangChain AI Node",
	"nodeCreator.nodeItem.deprecated": "Deprecated",
	"nodeCreator.nodeItem.beta": "Beta",
	"nodeCreator.preBuiltAgents.title": "Pre-built agents",
	"nodeCreator.preBuiltAgents.description": "Get started faster with ready to go agents",
	"nodeCredentials.createNew": "Create new credential",
	"nodeCredentials.credentialFor": "Credential for {credentialType}",
	"nodeCredentials.credentialsLabel": "Credential to connect with",
	"nodeCredentials.issues": "Issues",
	"nodeCredentials.selectCredential": "Select Credential",
	"nodeCredentials.selectedCredentialUnavailable": "{name} (unavailable)",
	"nodeCredentials.showMessage.message": "Nodes that used credential \"{oldCredentialName}\" have been updated to use \"{newCredentialName}\"",
	"nodeCredentials.showMessage.title": "Node credential updated",
	"nodeCredentials.autoAssigned.message": "Added this credential to {count} other node(s)",
	"nodeCredentials.updateCredential": "Update Credential",
	"nodeErrorView.cause": "Cause",
	"nodeErrorView.copyToClipboard": "Copy to Clipboard",
	"nodeErrorView.copyToClipboard.tooltip": "Copy error details for debugging. Copied data may contain sensitive information. Proceed with caution when sharing.",
	"nodeErrorView.dataBelowMayContain": "Data below may contain sensitive information. Proceed with caution when sharing.",
	"nodeErrorView.details": "Details",
	"nodeErrorView.details.from": "From {node}",
	"nodeErrorView.details.rawMessages": "Full message",
	"nodeErrorView.details.errorData": "Error data",
	"nodeErrorView.details.errorExtra": "Error extra",
	"nodeErrorView.details.request": "Request",
	"nodeErrorView.details.title": "Error details",
	"nodeErrorView.details.message": "Error message",
	"nodeErrorView.details.info": "Other info",
	"nodeErrorView.details.nodeVersion": "Node version",
	"nodeErrorView.details.nodeType": "Node type",
	"nodeErrorView.details.n8nVersion": "n8n version",
	"nodeErrorView.details.errorCause": "Error cause",
	"nodeErrorView.details.causeDetailed": "Cause detailed",
	"nodeErrorView.details.stackTrace": "Stack trace",
	"nodeErrorView.error": "ERROR",
	"nodeErrorView.errorSubNode": "Error in sub-node ‘{node}’",
	"nodeErrorView.httpCode": "HTTP Code",
	"nodeErrorView.errorCode": "Error code",
	"nodeErrorView.inParameter": "In or underneath Parameter",
	"nodeErrorView.itemIndex": "Item Index",
	"nodeErrorView.runIndex": "Run Index",
	"nodeErrorView.showMessage.title": "Copied to clipboard",
	"nodeErrorView.stack": "Stack",
	"nodeErrorView.theErrorCauseIsTooLargeToBeDisplayed": "The error cause is too large to be displayed",
	"nodeErrorView.time": "Time",
	"nodeErrorView.inputPanel.previousNodeError.title": "Error running node '{nodeName}'",
	"nodeErrorView.description.pairedItemInvalidInfo": "An expression here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. This is because the node <strong>'{nodeCause}'</strong> returned incorrect matching information (for item {itemIndex} of run {runIndex}).  <br/><br/>Try using <code>.first()</code>, <code>.last()</code> or <code>.all()[index]</code> instead of <code>.item</code>.",
	"nodeErrorView.description.pairedItemNoInfo": "An expression here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. The node <strong>'{nodeCause}'</strong> didn't return enough information.",
	"nodeErrorView.description.pairedItemNoInfoCodeNode": "An expression here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. You can either: <ul><li>Add the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">missing information</a> to the node <strong>'{nodeCause}'</strong></li><li>Or use <code>.first()</code>, <code>.last()</code> or <code>.all()[index]</code> instead of <code>.item</code></li></ul>",
	"nodeErrorView.description.pairedItemNoConnection": "There is no connection back to the node <strong>'{nodeCause}'</strong>, but it's used in an expression here.<br/><br/>Please wire up the node (there can be other nodes in between).",
	"nodeErrorView.description.pairedItemNoConnectionCodeNode": "There is no connection back to the node <strong>'{nodeCause}'</strong>, but it's used in code here.<br/><br/>Please wire up the node (there can be other nodes in between).",
	"nodeErrorView.description.noNodeExecutionData": "An expression references the node <strong>'{nodeCause}'</strong>, but it hasn't been executed yet. Either change the expression, or re-wire your workflow to make sure that node executes first.",
	"nodeErrorView.description.nodeNotFound": "The node <strong>'{nodeCause}'</strong> doesn't exist, but it's used in an expression here.",
	"nodeErrorView.description.noInputConnection": "This node has no input data. Please make sure this node is connected to another node.",
	"nodeErrorView.description.pairedItemMultipleMatches": "An expression here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. (There are multiple possible matches) <br/><br/>Try using <code>.first()</code>, <code>.last()</code> or <code>.all()[index]</code> instead of <code>.item</code> or <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">reference a different node</a>.",
	"nodeErrorView.description.pairedItemMultipleMatchesCodeNode": "The code here won't work because it uses <code>.item</code> and n8n can't figure out the <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">matching item</a>. (There are multiple possible matches) <br/><br/>Try using <code>.first()</code>, <code>.last()</code> or <code>.all()[index]</code> instead of <code>.item</code> or <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node/\">reference a different node</a>.",
	"nodeErrorView.description.pairedItemPinned": "The <a target=\"_blank\" href=\"https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-errors/\">item-matching</a> data in that node may be stale. It is needed by an expression in this node that uses <code>.item</code>.",
	"nodeHelpers.credentialsUnset": "Credentials for '{credentialType}' are not set.",
	"nodeSettings.alwaysOutputData.description": "If active, will output a single, empty item when the output would have been empty. Use to prevent the workflow finishing on this node.",
	"nodeSettings.alwaysOutputData.displayName": "Always Output Data",
	"nodeSettings.clickOnTheQuestionMarkIcon": "Click the '?' icon to open this node on n8n.io",
	"nodeSettings.onError.description": "Action to take when the node execution fails",
	"nodeSettings.onError.displayName": "On Error",
	"nodeSettings.onError.options.continueRegularOutput.description": "Pass error message as item in regular output",
	"nodeSettings.onError.options.continueRegularOutput.displayName": "Continue",
	"nodeSettings.onError.options.continueErrorOutput.description": "Pass item to an extra `error` output",
	"nodeSettings.onError.options.continueErrorOutput.displayName": "Continue (using error output)",
	"nodeSettings.onError.options.stopWorkflow.description": "Halt execution and fail workflow",
	"nodeSettings.onError.options.stopWorkflow.displayName": "Stop Workflow",
	"nodeSettings.docs": "Docs",
	"nodeSettings.executeButtonTooltip.times": "Will execute {inputSize} times, once for each input item",
	"nodeSettings.executeOnce.description": "If active, the node executes only once, with data from the first item it receives",
	"nodeSettings.executeOnce.displayName": "Execute Once",
	"nodeSettings.maxTries.description": "Number of times to attempt to execute the node before failing the execution",
	"nodeSettings.maxTries.displayName": "Max. Tries",
	"nodeSettings.noDescriptionFound": "No description found",
	"nodeSettings.nodeDescription": "Node Description",
	"nodeSettings.notes.description": "Optional note to save with the node",
	"nodeSettings.notes.displayName": "Notes",
	"nodeSettings.notesInFlow.description": "If active, the note above will display in the flow as a subtitle",
	"nodeSettings.notesInFlow.displayName": "Display Note in Flow?",
	"nodeSettings.parameters": "Parameters",
	"nodeSettings.parametersShort": "Params",
	"nodeSettings.settings": "Settings",
	"nodeSettings.action": "Action",
	"nodeSettings.credential": "Auth",
	"nodeSettings.communityNodeTooltip": "This is a <a href=\"{docUrl}\" target=\"_blank\"/>community node</a>",
	"nodeSettings.retryOnFail.description": "If active, the node tries to execute again when it fails",
	"nodeSettings.retryOnFail.displayName": "Retry On Fail",
	"nodeSettings.scopes.expandedNoticeWithScopes": "<a data-key=\"toggle-expand\">{count} scope</a> available for {activeCredential} credentials<br>{scopes}<br><a data-key=\"show-less\">Show less</a> | <a data-key=\"toggle-expand\">{count} scopes</a> available for {activeCredential} credentials<br>{scopes}<br><a data-key=\"show-less\">Show less</a>",
	"nodeSettings.scopes.notice": "<a data-key=\"toggle-expand\">{count} scope</a> available for {activeCredential} credentials | <a data-key=\"toggle-expand\">{count} scopes</a> available for {activeCredential} credentials",
	"nodeSettings.theNodeIsNotValidAsItsTypeIsUnknown": "The node is not valid as its type ({nodeType}) is unknown",
	"nodeSettings.communityNodeDetails.title": "Node details",
	"nodeSettings.communityNodeUnknown.title": "Install this node to use it",
	"nodeSettings.communityNodeUnknown.title.preview": "Detailed node info is not available",
	"nodeSettings.communityNodeUnknown.description": "This node is not currently installed. It's part of the {action} community package.",
	"nodeSettings.communityNodeUnknown.installLink.text": "How to install community nodes",
	"nodeSettings.communityNodeUnknown.installButton.label": "Install",
	"nodeSettings.communityNodeUnknown.viewDetailsButton.label": "View details",
	"nodeSettings.nodeTypeUnknown.description": "This node is not currently installed. It is either from a newer version of n8n, a {action}, or has an invalid structure",
	"nodeSettings.nodeTypeUnknown.description.customNode": "custom node",
	"nodeSettings.thisNodeDoesNotHaveAnyParameters": "This node does not have any parameters",
	"nodeSettings.useTheHttpRequestNode": "Use the <b>HTTP Request</b> node to make a custom API call. We'll take care of the {nodeTypeDisplayName} auth for you. <a target=\"_blank\" href=\"https://docs.n8n.io/integrations/custom-operations/\">Learn more</a>",
	"nodeSettings.waitBetweenTries.description": "How long to wait between each attempt (in milliseconds)",
	"nodeSettings.waitBetweenTries.displayName": "Wait Between Tries (ms)",
	"nodeSettings.hasForeignCredential": "To edit this node, either:<br/>a) Ask {owner} to share the credential with you, or<br/>b) Duplicate the node and add your own credential",
	"nodeSettings.latest": "Latest",
	"nodeSettings.deprecated": "Deprecated",
	"nodeSettings.latestVersion": "Latest version: {version}",
	"nodeSettings.outputCleared.title": "Parameters changed",
	"nodeSettings.outputCleared.message": "Order of parameters changed, outgoing connections were cleared",
	"nodeSettings.nodeVersion": "{node} node version {version}",
	"nodeView.addNode": "Add node",
	"nodeView.openFocusPanel": "Open focus panel",
	"nodeView.openNodesPanel": "Open nodes panel",
	"nodeView.openCommandBar": "Command bar",
	"nodeView.addATriggerNodeFirst": "Add a <a data-action='showNodeCreator'>Trigger Node</a> first",
	"nodeView.addOrEnableTriggerNode": "<a data-action='showNodeCreator'>Add</a> or enable a Trigger node to execute the workflow",
	"nodeView.addSticky": "Click to add sticky note",
	"nodeView.addStickyHint": "Add sticky note",
	"nodeView.cantExecuteNoTrigger": "Cannot execute workflow",
	"nodeView.canvasAddButton.addATriggerNodeBeforeExecuting": "Add a Trigger Node before executing the workflow",
	"nodeView.canvasAddButton.addFirstStep": "Add first step…",
	"nodeView.templateLink": "or start from a template",
	"nodeView.confirmMessage.onClipboardPasteEvent.cancelButtonText": "",
	"nodeView.confirmMessage.onClipboardPasteEvent.confirmButtonText": "Yes, import",
	"nodeView.confirmMessage.onClipboardPasteEvent.headline": "Import Workflow?",
	"nodeView.confirmMessage.onClipboardPasteEvent.message": "Workflow will be imported from<br /><i>{plainTextData}<i>",
	"nodeView.confirmMessage.debug.cancelButtonText": "Cancel",
	"nodeView.confirmMessage.debug.confirmButtonText": "Unpin",
	"nodeView.confirmMessage.debug.headline": "Unpin workflow data",
	"nodeView.confirmMessage.debug.message": "Loading this execution will unpin the data currently pinned in these nodes",
	"nodeView.couldntImportWorkflow": "Could not import workflow",
	"nodeView.couldntLoadWorkflow.invalidWorkflowObject": "Invalid workflow object",
	"nodeView.deletesTheCurrentExecutionData": "Deletes the current execution data",
	"nodeView.focusPanel.noExecutionData": "Execute previous node for autocomplete",
	"nodeView.focusPanel.noParameters.title": "Show a node parameter here, to iterate easily",
	"nodeView.focusPanel.noParameters.subtitle": "For example, keep your prompt always visible so you can run the workflow while tweaking it",
	"nodeView.focusPanel.v2.noParameters.title": "Select a node to edit it here",
	"nodeView.focusPanel.v2.noParameters.subtitle": "Or show single node parameter you’d like to iterate on by clicking this button next to it:",
	"nodeView.focusPanel.missingParameter": "This parameter is no longer visible on the node. A related parameter was likely changed, removing this one.",
	"nodeView.itLooksLikeYouHaveBeenEditingSomething": "It looks like you made some edits. If you leave before saving, your changes will be lost.",
	"nodeView.loadingTemplate": "Loading template",
	"nodeView.moreInfo": "More info",
	"nodeView.noNodesGivenToAdd": "No nodes to add specified",
	"nodeView.prompt.cancel": "@:_reusableBaseText.cancel",
	"nodeView.prompt.invalidName": "Invalid Name",
	"nodeView.prompt.newName": "New Name",
	"nodeView.prompt.rename": "Rename",
	"nodeView.prompt.renameNode": "Rename Node",
	"nodeView.redirecting": "Redirecting",
	"nodeView.refresh": "Refresh",
	"nodeView.resetZoom": "Reset Zoom",
	"nodeView.tidyUp": "Tidy Up",
	"nodeView.runButtonText.executeWorkflow": "Execute workflow",
	"nodeView.runButtonText.executingWorkflow": "Executing workflow",
	"nodeView.runButtonText.waitingForTriggerEvent": "Waiting for trigger event",
	"nodeView.runButtonText.from": "from {nodeName}",
	"nodeView.showError.workflowError": "Workflow execution had an error",
	"nodeView.showError.getWorkflowDataFromUrl.title": "Problem loading workflow",
	"nodeView.showError.importWorkflowData.title": "Problem importing workflow",
	"nodeView.showError.mounted1.message": "There was a problem loading init data",
	"nodeView.showError.mounted1.title": "Init Problem",
	"nodeView.showError.mounted2.message": "There was a problem initializing the workflow",
	"nodeView.showError.mounted2.title": "Init Problem",
	"nodeView.showError.openExecution.title": "Problem loading execution",
	"nodeView.showError.openExecution.node": "Problem opening node in execution",
	"nodeView.showError.openWorkflow.title": "Problem opening workflow",
	"nodeView.showError.stopExecution.title": "Problem stopping execution",
	"nodeView.showError.stopWaitingForWebhook.title": "Problem deleting test webhook",
	"nodeView.showError.nodeNodeCompatible.title": "Connection not possible",
	"nodeView.showError.nodeNodeCompatible.message": "The node \"{sourceNodeName}\" can't be connected to the node \"{targetNodeName}\" because they are not compatible.",
	"nodeView.showMessage.addNodeButton.message": "'{nodeTypeName}' is an unknown node type",
	"nodeView.showMessage.addNodeButton.title": "Could not insert node",
	"nodeView.showMessage.keyDown.title": "Workflow created",
	"nodeView.showMessage.showMaxNodeTypeError.message": "Only one '{nodeTypeDataDisplayName}' node is allowed in a workflow | Only {count} '{nodeTypeDataDisplayName}' nodes are allowed in a workflow",
	"nodeView.showMessage.showMaxNodeTypeError.title": "Could not insert node",
	"nodeView.showMessage.stopExecutionCatch.unsaved.message": "This execution was canceled",
	"nodeView.showMessage.stopExecutionCatch.unsaved.title": "Execution canceled",
	"nodeView.showMessage.stopExecutionCatch.message": "It completed before it could be stopped",
	"nodeView.showMessage.stopExecutionCatch.title": "Workflow finished executing",
	"nodeView.showMessage.stopExecutionTry.title": "Execution stopped",
	"nodeView.showMessage.debug.title": "Execution data imported",
	"nodeView.showMessage.debug.content": "You can make edits and re-execute. Once you're done, unpin the the first node.",
	"nodeView.showMessage.debug.missingNodes.title": "Some execution data wasn't imported",
	"nodeView.showMessage.debug.missingNodes.content": "Some nodes have been deleted or renamed or added to the workflow since the execution ran.",
	"nodeView.showMessage.ndvUrl.missingNodes.title": "Node not found",
	"nodeView.showMessage.ndvUrl.missingNodes.content": "URL contained a reference to an unknown node. Maybe the node was deleted?",
	"nodeView.stopCurrentExecution": "Stop current execution",
	"nodeView.stopWaitingForWebhookCall": "Stop waiting for webhook call",
	"nodeView.stoppingCurrentExecution": "Stopping current execution",
	"nodeView.thereWasAProblemLoadingTheNodeParametersOfNode": "There was a problem loading the parameters of the node",
	"nodeView.thisExecutionHasntFinishedYet": "This execution hasn't finished yet",
	"nodeView.toSeeTheLatestStatus": "to see the latest status",
	"nodeView.workflowTemplateWithIdCouldNotBeFound": "Workflow template with ID \"{templateId}\" could not be found",
	"nodeView.workflowWithIdCouldNotBeFound": "Workflow with ID \"{workflowId}\" could not be found",
	"nodeView.zoomIn": "Zoom In",
	"nodeView.zoomOut": "Zoom Out",
	"nodeView.zoomToFit": "Zoom to Fit",
	"nodeView.replaceMe": "Replace Me",
	"nodeView.setupTemplate": "Set up template",
	"nodeView.expandAllNodes": "Expand all nodes",
	"nodeView.collapseAllNodes": "Collapse all nodes",
	"nodeView.enterZoomMode": "Enter zoom mode",
	"nodeView.leaveZoomMode": "Leave zoom mode",
	"nodeViewV2.showError.editingNotAllowed": "Editing is not allowed",
	"nodeViewV2.showError.failedToCreateNode": "Failed to create node",
	"contextMenu.node": "node | nodes",
	"contextMenu.sticky": "sticky note | sticky notes",
	"contextMenu.selectAll": "Select all",
	"contextMenu.deselectAll": "Clear selection",
	"contextMenu.tidyUpWorkflow": "Tidy up workflow",
	"contextMenu.tidyUpSelection": "Tidy up selection",
	"contextMenu.extract": "Convert node to sub-workflow | Convert {count} nodes to sub-workflow",
	"contextMenu.replace": "Replace",
	"contextMenu.duplicate": "Duplicate | Duplicate {count} {subject}",
	"contextMenu.open": "Open...",
	"contextMenu.test": "Execute step",
	"contextMenu.rename": "Rename",
	"contextMenu.openSubworkflow": "Go to Sub-workflow",
	"contextMenu.copy": "Copy | Copy {count} {subject}",
	"contextMenu.deactivate": "Deactivate | Deactivate {count} {subject}",
	"contextMenu.activate": "Activate | Activate {count} nodes",
	"contextMenu.pin": "Pin | Pin {count} nodes",
	"contextMenu.unpin": "Unpin | Unpin {count} nodes",
	"contextMenu.delete": "Delete | Delete {count} {subject}",
	"contextMenu.addNode": "Add node",
	"contextMenu.addSticky": "Add sticky note",
	"contextMenu.editSticky": "Edit sticky note",
	"contextMenu.changeColor": "Change color",
	"nodeWebhooks.clickToCopyWebhookUrls": "Click to copy webhook URLs",
	"nodeWebhooks.clickToCopyWebhookUrls.formTrigger": "Click to copy Form URL",
	"nodeWebhooks.clickToCopyWebhookUrls.chatTrigger": "Click to copy Chat URL",
	"nodeWebhooks.clickToCopyWebhookUrls.mcpTrigger": "Click to copy MCP URL",
	"nodeWebhooks.clickToDisplayWebhookUrls": "Click to display webhook URLs",
	"nodeWebhooks.clickToDisplayWebhookUrls.formTrigger": "Click to display Form URL",
	"nodeWebhooks.clickToDisplayWebhookUrls.chatTrigger": "Click to display Chat URL",
	"nodeWebhooks.clickToDisplayWebhookUrls.mcpTrigger": "Click to display MCP URL",
	"nodeWebhooks.clickToHideWebhookUrls": "Click to hide webhook URLs",
	"nodeWebhooks.clickToHideWebhookUrls.formTrigger": "Click to hide Form URL",
	"nodeWebhooks.clickToHideWebhookUrls.chatTrigger": "Click to hide Chat URL",
	"nodeWebhooks.clickToHideWebhookUrls.mcpTrigger": "Click to hide MCP URL",
	"nodeWebhooks.invalidExpression": "[INVALID EXPRESSION]",
	"nodeWebhooks.productionUrl": "Production URL",
	"nodeWebhooks.showMessage.title": "URL copied",
	"nodeWebhooks.showMessage.title.formTrigger": "Form URL copied",
	"nodeWebhooks.showMessage.title.chatTrigger": "Chat URL copied",
	"nodeWebhooks.showMessage.title.mcpTrigger": "MCP URL copied",
	"nodeWebhooks.showMessage.message.formTrigger": "Form submissions made via this URL will trigger the workflow when it's activated",
	"nodeWebhooks.showMessage.message.chatTrigger": "Chat submissions made via this URL will trigger the workflow when it's activated",
	"nodeWebhooks.testUrl": "Test URL",
	"nodeWebhooks.webhookUrls": "Webhook URLs",
	"nodeWebhooks.webhookUrls.formTrigger": "Form URLs",
	"nodeWebhooks.webhookUrls.chatTrigger": "Chat URL",
	"nodeWebhooks.webhookUrls.mcpTrigger": "MCP URL",
	"openWorkflow.workflowImportError": "Could not import workflow",
	"openWorkflow.workflowNotFoundError": "Could not find workflow",
	"parameterInput.expressionResult": "e.g. {result}",
	"parameterInput.tip": "Tip",
	"parameterInput.dragTipBeforePill": "Drag an",
	"parameterInput.inputField": "input field",
	"parameterInput.dragTipAfterPill": "from the left to use it here.",
	"parameterInput.learnMore": "Learn more",
	"parameterInput.result": "Result",
	"parameterInput.item": "Item",
	"parameterInput.hoverTableItemTip": "You can also do this by hovering over input/output items in the table view",
	"parameterInput.emptyString": "[empty]",
	"parameterInput.customApiCall": "Custom API Call",
	"parameterInput.error": "ERROR",
	"parameterInput.expression": "Expression",
	"parameterInput.fixed": "Fixed",
	"parameterInput.formatHtml": "Format HTML",
	"parameterInput.issues": "Issues",
	"parameterInput.loadingOptions": "Loading options...",
	"parameterInput.loadOptionsErrorService": "Error fetching options from {service}",
	"parameterInput.loadOptionsError": "Error fetching options",
	"parameterInput.loadOptionsCredentialsRequired": "Set up credential to see options",
	"parameterInput.openEditWindow": "Open Edit Window",
	"parameterInput.parameter": "Parameter: \"{shortPath}\"",
	"parameterInput.parameterHasExpression": "Parameter: \"{shortPath}\" has an expression",
	"parameterInput.parameterHasIssues": "Parameter: \"{shortPath}\" has issues",
	"parameterInput.parameterHasIssuesAndExpression": "Parameter: \"{shortPath}\" has issues and an expression",
	"parameterInput.refreshList": "Refresh List",
	"parameterInput.clearContents": "Clear Contents",
	"parameterInput.focusParameter": "Focus parameter",
	"parameterInput.resetValue": "Reset Value",
	"parameterInput.select": "Select",
	"parameterInput.selectDateAndTime": "Select date and time",
	"parameterInput.selectACredentialTypeFromTheDropdown": "Select a credential type from the dropdown",
	"parameterInput.theValueIsNotSupported": "The value \"{checkValue}\" is not supported!",
	"parameterInput.selectedWorkflowIsArchived": "The selected workflow is archived",
	"parameterInputExpanded.openDocs": "Open docs",
	"parameterInputExpanded.thisFieldIsRequired": "This field is required",
	"parameterInputList.delete": "Delete",
	"parameterInputList.deleteParameter": "Delete Parameter",
	"parameterInputList.parameterOptions": "Parameter Options",
	"parameterInputList.loadingFields": "Loading fields...",
	"parameterInputList.loadingError": "Error loading fields. Refresh you page and try again.",
	"parameterInputList.callout.dismiss.confirm.text": "Do you want to permanently hide this?",
	"parameterInputList.callout.dismiss.confirm.confirmButtonText": "Confirm",
	"parameterInputList.callout.dismiss.confirm.cancelButtonText": "Cancel",
	"parameterOverride.overridePanelText": "Defined automatically by the <b>model</b>",
	"parameterOverride.applyOverrideButtonTooltip": "Let the model define this parameter",
	"parameterOverride.descriptionTooltip": "Explain to the LLM how it should generate this value, a good, specific description would allow LLMs to produce expected results much more often",
	"personalizationModal.businessOwner": "Business Owner",
	"personalizationModal.continue": "Continue",
	"personalizationModal.cicd": "CI/CD",
	"personalizationModal.cloudInfrastructureOrchestration": "Cloud infrastructure orchestration",
	"personalizationModal.customerIntegrations": "Customer integrations",
	"personalizationModal.customerSupport": "Customer support",
	"personalizationModal.customizeN8n": "Customize n8n to you",
	"personalizationModal.dataScience": "Data Science",
	"personalizationModal.devops": "Devops",
	"personalizationModal.digitalAgencyOrConsultant": "Marketing agency / consultancy",
	"personalizationModal.eCommerce": "Ecommerce",
	"personalizationModal.education": "Education",
	"personalizationModal.engineering": "Engineering",
	"personalizationModal.engineeringOrDevops": "Engineering / Devops",
	"personalizationModal.errorWhileSubmittingResults": "Error while submitting results",
	"personalizationModal.financeOrAccounting": "Finance / Accounting",
	"personalizationModal.financeOrInsurance": "Finance / Insurance",
	"personalizationModal.getStarted": "Get started",
	"personalizationModal.government": "Government",
	"personalizationModal.healthcare": "Healthcare",
	"personalizationModal.howAreYourCodingSkills": "How are your coding skills?",
	"personalizationModal.howBigIsYourCompany": "How big is your company?",
	"personalizationModal.hr": "HR",
	"personalizationModal.imNotUsingN8nForWork": "I'm not using n8n for work",
	"personalizationModal.it": "IT",
	"personalizationModal.legal": "Legal",
	"personalizationModal.lessThan20People": "Less than 20 people",
	"personalizationModal.managedServiceProvider": "Managed service provider",
	"personalizationModal.manufacturing": "Manufacturing",
	"personalizationModal.marketing": "Marketing",
	"personalizationModal.media": "Media",
	"personalizationModal.notSureYet": "Not sure yet",
	"personalizationModal.operations": "Operations",
	"personalizationModal.other": "Other",
	"personalizationModal.otherPleaseSpecify": "Other (please specify)",
	"personalizationModal.specifyReportedSource": "Specify how you heard about n8n",
	"personalizationModal.people": "people",
	"personalizationModal.physicalRetailOrServices": "Physical retail or services",
	"personalizationModal.product": "Product (e.g. fast prototyping)",
	"personalizationModal.realEstateOrConstruction": "Real estate / Construction",
	"personalizationModal.saas": "Software as a service",
	"personalizationModal.salesAndMarketing": "Sales and Marketing",
	"personalizationModal.security": "Security",
	"personalizationModal.select": "Select...",
	"personalizationModal.howDidYouHearAboutN8n": "How did you hear about n8n?",
	"personalizationModal.friendWordOfMouth": "Friend / Word of mouth",
	"personalizationModal.podcast": "Podcast",
	"personalizationModal.event": "Event",
	"personalizationModal.myself": "Myself",
	"personalizationModal.myTeam": "My team",
	"personalizationModal.otherTeams": "Other teams",
	"personalizationModal.specifyAutomationBeneficiary": "Who will your automations mainly be for?",
	"personalizationModal.specifyYourRole": "Please specify your role",
	"personalizationModal.specifyYourAutomationGoal": "Please specify your automation goal",
	"personalizationModal.specifyYourCompanysIndustry": "Specify your company's industry",
	"personalizationModal.support": "Support",
	"personalizationModal.systemsIntegrator": "Systems integrator / Automation agency",
	"personalizationModal.telecoms": "Telecoms",
	"personalizationModal.thanks": "Thanks!",
	"personalizationModal.theseQuestionsHelpUs": "These questions help us tailor n8n to you",
	"personalizationModal.whichRoleBestDescribesYou": "Which role best describes you?",
	"personalizationModal.whatAreYouLookingToAutomate": "What are you looking to automate?",
	"personalizationModal.whatBestDescribesYourCompany": "What best describes your company?",
	"personalizationModal.whichIndustriesIsYourCompanyIn": "Which industries is your company in?",
	"personalizationModal.specifySalesMarketingGoal": "Which parts of Sales and Marketing?",
	"personalizationModal.leadGeneration": "Lead generation, enrichment, routing",
	"personalizationModal.customerCommunication": "Customer communication",
	"personalizationModal.customerActions": "Actions when lead changes status",
	"personalizationModal.yourEmailAddress": "Your email address",
	"personalizationModal.email": "Enter your email..",
	"personalizationModal.adCampaign": "Ad campaign management",
	"personalizationModal.reporting": "Reporting",
	"personalizationModal.ticketingSystemsIntegrations": "Ticketing systems integrations",
	"personalizationModal.dataSynching": "Data syncing",
	"personalizationModal.incidentResponse": "Incident response",
	"personalizationModal.monitoringAndAlerting": "Monitoring and alerting",
	"personalizationModal.specifyUsageMode": "Are you looking to do any of these?",
	"personalizationModal.connectToInternalDB": "Connect to my company’s internal databases",
	"personalizationModal.buildBackendServices": "Build backend services (endpoints)",
	"personalizationModal.manipulateFiles": "Manipulate/transfer files",
	"personalizationModal.specifyOtherSalesAndMarketingGoal": "Specify your other Sales and Marketing goals",
	"personalizationModal.registerEmailForTrial": "Register your email to activate a free 14 day trial of our {trial}",
	"personalizationModal.registerEmailForTrial.enterprise": "Enterprise features",
	"personalizationModal.registerEmailForTrial.notice": "By checking this box, you agree to let us store your name and email to activate your trial and send over your license key. We’ll check-in at the end of the trial to ensure you’re getting the most out of our Enterprise features.",
	"personalizationModal.registerEmailForTrial.success.title": "Your enterprise license is on its way",
	"personalizationModal.registerEmailForTrial.success.message": "You'll shortly receive an email to activate your enterprise license. If you don't see it, check your spam folder.",
	"personalizationModal.registerEmailForTrial.success.button": "Start using n8n",
	"personalizationModal.registerEmailForTrial.error": "Error while registering for enterprise trial",
	"pushConnection.nodeExecutedSuccessfully": "Node executed successfully",
	"pushConnection.workflowExecutedSuccessfully": "Workflow executed successfully",
	"pushConnectionTracker.cannotConnectToServer": "You have a connection issue or the server is down. <br />n8n should reconnect automatically once the issue is resolved.",
	"pushConnectionTracker.connectionLost": "Connection lost",
	"pushConnectionTracker.connectionLost.message": "Attempting to reconnect...",
	"pushConnection.pollingNode.dataNotFound": "No {service} data found",
	"pushConnection.pollingNode.dataNotFound.message": "We didn’t find any data in {service} to simulate an event. Please create one in {service} and try again.",
	"pushConnection.executionFailed": "Execution failed",
	"pushConnection.executionFailed.message": "There might not be enough memory to finish the execution. Tips for avoiding this <a target=\"_blank\" href=\"https://docs.n8n.io/flow-logic/error-handling/memory-errors/\">here</a>",
	"pushConnection.executionError": "There was a problem executing the workflow{error}",
	"pushConnection.executionError.openNode": "Open errored node",
	"pushConnection.executionError.details": "<br /><strong>{details}</strong>",
	"prompts.npsSurvey.recommendationQuestion": "How likely are you to recommend n8n to a friend or colleague?",
	"prompts.npsSurvey.greatFeedbackTitle": "Great to hear! Can we reach out to see how we can make n8n even better for you?",
	"prompts.npsSurvey.defaultFeedbackTitle": "Thanks for your feedback! We'd love to understand how we can improve. Can we reach out?",
	"prompts.npsSurvey.feedbackQuestionTitle": "Thank you! Why did you choose this score?",
	"prompts.npsSurvey.notLikely": "Not likely",
	"prompts.npsSurvey.veryLikely": "Very likely",
	"prompts.npsSurvey.send": "Send",
	"prompts.npsSurvey.reviewUs": "If you’d like to help even more, leave us a <a target=\"_blank\" href=\"https://www.g2.com/products/n8n/reviews/start\">review on G2</a>.",
	"prompts.npsSurvey.thanks": "Thanks for your feedback",
	"projectRoles.manageRoles.paywall.title": "Available on the Enterprise plan",
	"projectRoles.manageRoles.paywall.text": "Create custom roles with granular permissions to control exactly what team members can do inside projects.",
	"projectRoles.project:read": "View",
	"projectRoles.project:read.tooltip": "View project name, icon, description, and navigate within the project",
	"projectRoles.project:update": "Edit",
	"projectRoles.project:update.tooltip": "Edit project details and manage users",
	"projectRoles.project:delete": "Delete",
	"projectRoles.project:delete.tooltip": "Delete the entire project and all its contents",
	"projectRoles.folder:read": "View",
	"projectRoles.folder:read.tooltip": "View folders and subfolders within a project",
	"projectRoles.folder:update": "Edit",
	"projectRoles.folder:update.tooltip": "Rename folders, move workflows between folders, and change parent folder",
	"projectRoles.folder:create": "Create",
	"projectRoles.folder:create.tooltip": "Create new folders or subfolders",
	"projectRoles.folder:move": "Transfer",
	"projectRoles.folder:move.tooltip": "Move a folder and its workflows to another project.",
	"projectRoles.folder:delete": "Delete",
	"projectRoles.folder:delete.tooltip": "Delete an empty folder. If not empty, ask further action",
	"projectRoles.workflow:read": "View",
	"projectRoles.workflow:read.tooltip": "View workflows within the project",
	"projectRoles.workflow:execute": "Execute",
	"projectRoles.workflow:update": "Edit",
	"projectRoles.workflow:update.tooltip": "Edit workflow content, activate/deactivate, and execute workflows",
	"projectRoles.workflow:create": "Create",
	"projectRoles.workflow:create.tooltip": "Create new workflows",
	"projectRoles.workflow:share": "Share",
	"projectRoles.workflow:move": "Transfer",
	"projectRoles.workflow:move.tooltip": "Transfer workflows to another project",
	"projectRoles.workflow:delete": "Delete",
	"projectRoles.workflow:delete.tooltip": "Delete workflows",
	"projectRoles.credential:read": "View",
	"projectRoles.credential:read.tooltip": "View credentials details (secret masked) and use them in workflows",
	"projectRoles.credential:update": "Edit",
	"projectRoles.credential:update.tooltip": "Edit credential details including secret",
	"projectRoles.credential:create": "Create",
	"projectRoles.credential:create.tooltip": "Create new credentials",
	"projectRoles.credential:share": "Share",
	"projectRoles.credential:share.tooltip": "Share credentials with other users",
	"projectRoles.credential:move": "Transfer",
	"projectRoles.credential:move.tooltip": "Move credentials to another project",
	"projectRoles.credential:delete": "Delete",
	"projectRoles.credential:delete.tooltip": "Delete credentials",
	"projectRoles.sourceControl:pull": "Pull",
	"projectRoles.sourceControl:push": "Push",
	"projectRoles.sourceControl:push.tooltip": "Push changes (workflows, credentials, tags) to the remote repository",
	"projectRoles.sourceControl:manage": "Configure",
	"projectRoles.sourceControl.table.name": "Name",
	"projectRoles.sourceControl.table.type": "Type",
	"projectRoles.sourceControl.table.assignedTo": "Assigned to",
	"projectRoles.sourceControl.table.lastEdited": "Last edited",
	"projectRoles.backToRoleList": "Back to role list",
	"projectRoles.newRole": "New Role",
	"projectRoles.addRole": "Add role",
	"projectRoles.discardChanges": "Discard changes",
	"projectRoles.save": "Save",
	"projectRoles.create": "Create",
	"projectRoles.roleName": "Role name",
	"projectRoles.description": "Description",
	"projectRoles.optional": "Optional",
	"projectRoles.permissions": "Permissions",
	"projectRoles.preset": "Preset",
	"projectRoles.admin": "Admin",
	"projectRoles.editor": "Editor",
	"projectRoles.viewer": "Viewer",
	"projectRoles.type.project": "Project",
	"projectRoles.type.folder": "Folders",
	"projectRoles.type.workflow": "Workflows",
	"projectRoles.type.credential": "Credentials",
	"projectRoles.type.sourceControl": "Source control",
	"projectRoles.literal.system": "System",
	"projectRoles.literal.custom": "Custom",
	"projectRoles.action.cancel": "Cancel",
	"projectRoles.action.delete": "Delete",
	"projectRoles.action.delete.button": "Delete role",
	"projectRoles.action.delete.success": "Role deleted",
	"projectRoles.action.delete.error": "Error deleting role",
	"projectRoles.action.delete.title": "Delete '{roleName}'?",
	"projectRoles.action.delete.text": "Are you sure that you want to delete '{roleName}' permanently? This action cannot be undone.",
	"projectRoles.action.delete.warning": "Deleting a role is permanent. This can’t be undone.",
	"projectRoles.action.delete.useWarning": "You can’t delete this role while it’s assigned to {count} users. Unassign it from all users first.",
	"projectRoles.dangerZone": "Danger zone",
	"projectRoles.action.duplicate": "Duplicate",
	"projectRoles.action.duplicate.name": "Copy of {roleName}",
	"projectRoles.action.duplicate.success": "Role '{roleName}' duplicated successfully as '{roleDuplicateName}'",
	"projectRoles.action.duplicate.error": "Error duplicating role",
	"projectRoles.action.create.success": "Role created successfully",
	"projectRoles.action.create.error": "Error creating role",
	"projectRoles.action.update": "Update role",
	"projectRoles.action.update.success": "Role updated successfully",
	"projectRoles.action.update.error": "Error updating role",
	"projectRoles.action.update.title": "Update role for '{count}' users?",
	"projectRoles.action.update.text": "These changes will instantly affect all {count} users with this role. Are you sure you want to continue?",
	"renameAction.emptyName.message": "Please enter a name, or press 'esc' to go back to the old one",
	"renameAction.emptyName.title": "Name missing",
	"renameAction.invalidName.title": "Invalid name",
	"resourceLocator.id.placeholder": "Enter ID...",
	"resourceLocator.mode.id": "By ID",
	"resourceLocator.mode.url": "By URL",
	"resourceLocator.mode.list": "From list",
	"resourceLocator.mode.list.disabled.title": "Change to Fixed mode to choose From List",
	"resourceLocator.mode.list.error.title": "Could not load list",
	"resourceLocator.mode.list.error.description.checkCredentials": "Check your credential",
	"resourceLocator.mode.list.error.description.noCredentials": "Add your credential",
	"resourceLocator.mode.list.noResults": "No results",
	"resourceLocator.mode.list.openUrl": "Open URL",
	"resourceLocator.mode.list.placeholder": "Choose...",
	"resourceLocator.mode.list.searchRequired": "Enter a search term to show results",
	"resourceLocator.mode.list.addNewResource.vectorStoreInMemory": "Create key '{resourceName}'",
	"resourceLocator.dataTable.createNew": "Create new data table",
	"resourceLocator.modeSelector.placeholder": "Mode...",
	"resourceLocator.openSpecificResource": "Open {entity} in {appName}",
	"resourceLocator.openResource": "Open in {appName}",
	"resourceLocator.placeholder.searchOrCreate": "Search or create...",
	"resourceLocator.placeholder.search": "Search...",
	"resourceLocator.url.placeholder": "Enter URL...",
	"resourceMapper.autoMappingNotice": "In this mode, make sure the incoming data fields are named the same as the {fieldWord} in {serviceName}. (Use an 'Edit Fields' node before this node to change them if required.)",
	"resourceMapper.mappingMode.label": "Mapping Column Mode",
	"resourceMapper.mappingMode.defineBelow.name": "Map Each Column Manually",
	"resourceMapper.mappingMode.defineBelow.description": "Set the value for each {fieldWord}",
	"resourceMapper.mappingMode.autoMapInputData.name": "Map Automatically",
	"resourceMapper.mappingMode.autoMapInputData.description": "Look for incoming data that matches the {fieldWord} in {serviceName}",
	"resourceMapper.fetchingFields.message": "Fetching {fieldWord}",
	"resourceMapper.fetchingFields.errorMessage": "Can't get {fieldWord}.",
	"resourceMapper.fetchingFields.noFieldsFound": "No {fieldWord} found in {serviceName}.",
	"resourceMapper.columnsToMatchOn.label": "{fieldWord} to match on",
	"resourceMapper.columnsToMatchOn.multi.description": "The {fieldWord} to use when matching rows in {nodeDisplayName} to the input items of this node. Usually an ID.",
	"resourceMapper.columnsToMatchOn.single.description": "The {fieldWord} to use when matching rows in {nodeDisplayName} to the input items of this node. Usually an ID.",
	"resourceMapper.columnsToMatchOn.tooltip": "The {fieldWord} to compare when finding the rows to update",
	"resourceMapper.columnsToMatchOn.noFieldsFound": "No {fieldWord} that can be used for matching found in {serviceName}.",
	"resourceMapper.valuesToSend.label": "Values to Send",
	"resourceMapper.valuesToUpdate.label": "Values to Update",
	"resourceMapper.usingToMatch": "(using to match)",
	"resourceMapper.usingToMatch.description": "This {fieldWord} won't be updated and can't be removed, as it's used for matching",
	"resourceMapper.removeField": "Remove {fieldWord}",
	"resourceMapper.mandatoryField.title": "This {fieldWord} is mandatory and can’t be removed",
	"resourceMapper.addFieldToSend": "Add {fieldWord} to send",
	"resourceMapper.matching.title": "This {fieldWord} is used for matching and can’t be removed",
	"resourceMapper.addAllFields": "Add All {fieldWord}",
	"resourceMapper.removeAllFields": "Remove All {fieldWord}",
	"resourceMapper.refreshFieldList": "Refresh {fieldWord} List",
	"resourceMapper.staleDataWarning.tooltip": "{fieldWord} are outdated. Refresh to see the changes.",
	"resourceMapper.staleDataWarning.notice": "Refresh to see the updated fields",
	"resourceMapper.attemptToConvertTypes.displayName": "Attempt To Convert Types",
	"resourceMapper.attemptToConvertTypes.description": "Attempt to convert types when mapping fields",
	"runData.openSubExecutionSingle": "View sub-execution",
	"runData.openSubExecutionWithId": "View sub-execution {id}",
	"runData.openParentExecution": "View parent execution {id}",
	"runData.emptyItemHint": "This is an item, but it's empty.",
	"runData.emptyArray": "[empty array]",
	"runData.emptyString": "empty",
	"runData.emptyObject": "{'{empty object}'}",
	"runData.unnamedField": "[Unnamed field]",
	"runData.switchToBinary.info": "This item only has",
	"runData.switchToBinary.binary": "binary data",
	"runData.linking.hint": "Link displayed input and output runs",
	"runData.unlinking.hint": "Unlink displayed input and output runs",
	"runData.binary": "Binary",
	"runData.copyItemPath": "Copy Item Path",
	"runData.copyItemPath.toast": "Item path copied",
	"runData.copyParameterPath": "Copy Parameter Path",
	"runData.copyParameterPath.toast": "Parameter path copied",
	"runData.copyValue": "Copy Selection",
	"runData.copyValue.toast": "Output data copied",
	"runData.copyToClipboard": "Copy to Clipboard",
	"runData.copyDisabled": "First click on the output data you want to copy, then click this button.",
	"runData.editOutput": "Edit Output",
	"runData.editOutputInvalid": "Problem with output data",
	"runData.editOutputInvalid.singleQuote": "Unexpected single quote. Please use double quotes (\") instead",
	"runData.editOutputInvalid.onLine": "On line {line}:",
	"runData.editOutputInvalid.atPosition": "(at position {position})",
	"runData.editValue": "Edit Value",
	"runData.executionStatus.success": "Executed successfully",
	"runData.executionStatus.failed": "Execution failed",
	"runData.executionStatus.canceled": "Execution canceled",
	"runData.downloadBinaryData": "Download",
	"runData.executeNode": "Test Node",
	"runData.executionTime": "Execution Time",
	"runData.fileExtension": "File Extension",
	"runData.directory": "Directory",
	"runData.fileName": "File Name",
	"runData.invalidPinnedData": "Invalid pinned data",
	"runData.items": "Items",
	"runData.json": "JSON",
	"runData.rendered": "Rendered",
	"runData.schema": "Schema",
	"runData.mimeType": "Mime Type",
	"runData.fileSize": "File Size",
	"runData.ms": "ms",
	"runData.noBinaryDataFound": "No binary data found",
	"runData.noData": "No data",
	"runData.noTextDataFound": "No text data found",
	"runData.nodeReturnedALargeAmountOfData": "Node returned a large amount of data",
	"runData.output": "Output",
	"runData.showBinaryData": "View",
	"runData.startTime": "Start Time",
	"runData.table": "Table",
	"runData.table.viewSubExecution": "View sub-execution {id}",
	"runData.pindata.learnMore": "Learn more",
	"runData.pindata.thisDataIsPinned": "This data is pinned for test executions.",
	"runData.pindata.unpin": "Unpin",
	"runData.editor.save": "Save",
	"runData.editor.cancel": "Cancel",
	"runData.editor.copyDataInfo": "You can copy data from previous executions and paste it above.",
	"runData.aiContentBlock.startedAt": "Started at {startTime}",
	"runData.aiContentBlock.tokens": "{count} Tokens",
	"runData.aiContentBlock.tokens.prompt": "Prompt:",
	"runData.aiContentBlock.tokens.completion": "Completion:",
	"runData.trimmedData.loading": "Loading data",
	"runData.panel.actions.collapse": "Collapse panel",
	"runData.panel.actions.open": "Open panel",
	"runData.panel.actions.popOut": "Pop out panel",
	"runData.panel.actions.sync": "Sync selection with canvas",
	"saveButton.save": "@:_reusableBaseText.save",
	"saveButton.saved": "Saved",
	"saveWorkflowButton.hint": "Save workflow",
	"saveButton.saving": "Saving",
	settings,
	"settings.communityNodes": "Community nodes",
	"settings.communityNodes.empty.title": "Supercharge your workflows with community nodes",
	"settings.communityNodes.empty.verified.only.title": "Supercharge your workflows with verified community nodes",
	"settings.communityNodes.empty.description": "Install over {count} node packages contributed by our community.",
	"settings.communityNodes.empty.verified.only.description": "You can install community and partner built node packages that have been verified by n8n directly from the nodes panel. Installed packages will show up here.",
	"settings.communityNodes.empty.description.no-packages": "Install node packages contributed by our community.",
	"settings.communityNodes.empty.installPackageLabel": "Install a community node",
	"settings.communityNodes.npmUnavailable.warning": "To use this feature, please <a href=\"{npmUrl}\" target=\"_blank\" title=\"How to install npm\">install npm</a> and restart n8n.",
	"settings.communityNodes.packageNodes.label": "{count} node | {count} nodes",
	"settings.communityNodes.updateAvailable.tooltip": "A newer version is available",
	"settings.communityNodes.viewDocsAction.label": "Documentation",
	"settings.communityNodes.uninstallAction.label": "Uninstall package",
	"settings.communityNodes.upToDate.tooltip": "You are up to date",
	"settings.communityNodes.failedToLoad.tooltip": "There is a problem with this package, try uninstalling it then reinstalling to resolve this issue",
	"settings.communityNodes.fetchError.title": "Problem fetching installed packages",
	"settings.communityNodes.fetchError.message": "There may be a problem with your internet connection or your n8n instance",
	"settings.communityNodes.installModal.title": "Install community nodes",
	"settings.communityNodes.installModal.description": "Find community nodes to add on the npm public registry.",
	"settings.communityNodes.browseButton.label": "Browse",
	"settings.communityNodes.installModal.packageName.label": "npm Package Name",
	"settings.communityNodes.installModal.packageName.tooltip": "<img src='/static/community_package_tooltip_img.png'/><p>This is the title of the package on <a href='{npmURL}'>npmjs.com</a></p><p>Install a specific version by adding it after {'@'}, e.g. <code>package-name{'@'}0.15.0</code></p>",
	"settings.communityNodes.installModal.packageName.placeholder": "e.g. n8n-nodes-chatwork",
	"settings.communityNodes.installModal.checkbox.label": "I understand the risks of installing unverified code from a public source.",
	"settings.communityNodes.installModal.installButton.label": "Install",
	"settings.communityNodes.installModal.installButton.label.loading": "Installing",
	"settings.communityNodes.installModal.error.packageNameNotValid": "Package name must start with n8n-nodes-",
	"settings.communityNodes.messages.install.success": "Package installed",
	"settings.communityNodes.messages.install.error": "Error installing new package",
	"settings.communityNodes.messages.uninstall.error": "Problem uninstalling package",
	"settings.communityNodes.messages.uninstall.success.title": "Package uninstalled",
	"settings.communityNodes.messages.update.success.title": "Package updated",
	"settings.communityNodes.messages.update.success.message": "{packageName} updated to version {version}",
	"settings.communityNodes.messages.update.error.title": "Problem updating package",
	"settings.communityNodes.confirmModal.uninstall.title": "Uninstall node package",
	"settings.communityNodes.confirmModal.uninstall.message": "Any workflows that use nodes from the {packageName} package won't be able to run. Are you sure?",
	"settings.communityNodes.confirmModal.uninstall.description": "Uninstalling the package will remove every instance of nodes included in this package. The following workflows will be effected:",
	"settings.communityNodes.confirmModal.noWorkflowsUsingNodes": "Nodes from this package are not used in any workflows",
	"settings.communityNodes.confirmModal.uninstall.buttonLabel": "Confirm uninstall",
	"settings.communityNodes.confirmModal.uninstall.buttonLoadingLabel": "Uninstalling",
	"settings.communityNodes.confirmModal.update.title": "Update node package",
	"settings.communityNodes.confirmModal.update.message": "You are about to update {packageName} to version {version}",
	"settings.communityNodes.confirmModal.includedNodes": "Package includes: {nodes}",
	"settings.communityNodes.confirmModal.update.warning": "This version has not been verified by n8n and may contain breaking changes or bugs.",
	"settings.communityNodes.confirmModal.update.description": "Updating to the latest version will update every instance of these nodes. The following workflows will be effected:",
	"settings.communityNodes.confirmModal.update.buttonLabel": "Confirm update",
	"settings.communityNodes.confirmModal.update.buttonLoadingLabel": "Updating...",
	"settings.communityNodes.confirmModal.cancel": "Cancel",
	"settings.mcp": "MCP Access",
	"settings.mcp.toggle.label": "Enable MCP",
	"settings.mcp.toggle.description": "Enable MCP access to this n8n instance",
	"settings.mcp.available.workflows.heading": "Available Workflows",
	"settings.mcp.connection.info.heading": "How to connect",
	"settings.mcp.workflows.table.action.removeMCPAccess": "Remove MCP Access",
	"settings.mcp.empty.title": "No workflows available for MCP",
	"settings.mcp.empty.description": "Enable MCP access in each workflow's settings to see them here.",
	"settings.mcp.toggle.disabled.tooltip": "Only instance admins can change this",
	"settings.mcp.toggle.error": "Error updating MCP access",
	"settings.mcp.instructions.enableAccess": "Enable workflow access in at least one workflow via its settings",
	"settings.mcp.instructions.serverUrl": "Server URL",
	"settings.mcp.instructions.apiKey.label": "Access token",
	"settings.mcp.instructions.json": "Or use the following code in your 'mcp.json' file",
	"settings.mcp.instructions.docs.part1": "For more detailed instructions and examples, have a look at",
	"settings.mcp.instructions.docs.part2": "our docs",
	"settings.mcp.instructions.rotateKey.tooltip": "Generate new token.<br/>This one will be automatically revoked.",
	"settings.mcp.instructions.apiKey.tip": "Use this as an authorization token. May be named differently in different clients",
	"settings.mcp.newKey.notice": "Make sure to copy your access token now. You won’t be able to see or copy it again!",
	"settings.mcp.error.fetching.apiKey": "Error fetching access token",
	"settings.mcp.error.rotating.apiKey": "Error generating new access token",
	"settings.goBack": "Go back",
	"settings.personal": "Personal",
	"settings.personal.basicInformation": "Basic Information",
	"settings.personal.personalSettings": "Personal Settings",
	"settings.personal.personalSettingsUpdated": "Personal details updated",
	"settings.personal.personalSettingsUpdatedError": "Problem updating your details",
	"settings.personal.role.tooltip.default": "Default role for new users",
	"settings.personal.role.tooltip.member": "Create and manage own workflows and credentials",
	"settings.personal.role.tooltip.admin": "Full access to manage workflows,tags, credentials, projects, users and more",
	"settings.personal.role.tooltip.owner": "Manage everything{cloudAccess}",
	"settings.personal.role.tooltip.cloud": " and access Cloud dashboard",
	"settings.personal.save": "Save",
	"settings.personal.security": "Security",
	"settings.signup.signUpInviterInfo": "{firstName} {lastName} has invited you to n8n",
	"settings.users": "Users",
	"settings.users.count": "{count} user | {count} users",
	"settings.users.search.placeholder": "Search by name or email",
	"settings.users.confirmDataHandlingAfterDeletion": "What should we do with their data?",
	"settings.users.confirmUserDeletion": "Are you sure you want to delete this invited user?",
	"settings.users.delete": "Delete",
	"settings.users.deleteConfirmationMessage": "Type \"delete all data\" to confirm",
	"settings.users.deleteConfirmationText": "delete all data",
	"settings.users.deleteUser": "Delete {user}",
	"settings.users.actions.delete": "Delete User",
	"settings.users.actions.reinvite": "Resend Invite",
	"settings.users.actions.copyInviteLink": "Copy Invite Link",
	"settings.users.actions.copyPasswordResetLink": "Copy Password Reset Link",
	"settings.users.actions.allowSSOManualLogin": "Allow Manual Login",
	"settings.users.actions.disallowSSOManualLogin": "Disallow Manual Login",
	"settings.users.deleteWorkflowsAndCredentials": "Delete their workflows and credentials",
	"settings.users.emailInvitesSent": "An invite email was sent to {emails}",
	"settings.users.emailInvitesSentError": "Could not invite {emails}",
	"settings.users.emailSentTo": "Email sent to {email}",
	"settings.users.invalidEmailError": "{email} is not a valid email",
	"settings.users.inviteLink.copy": "Copy Invite Link",
	"settings.users.inviteLink.error": "Could not retrieve invite link",
	"settings.users.invite": "Invite",
	"settings.users.invite.tooltip": "SAML login is activated. Users should be created in the IdP and will be provisioned in n8n on their first sign on.",
	"settings.users.inviteNewUsers": "Invite new users",
	"settings.users.copyInviteUrls": "You can now send the invitation links directly to your users",
	"settings.users.inviteResent": "Invite resent",
	"settings.users.inviteUser": "Invite user",
	"settings.users.inviteUser.inviteUrl": "Create invite link",
	"settings.users.inviteXUser": "Invite {count} users",
	"settings.users.inviteXUser.inviteUrl": "Create {count} invite links",
	"settings.users.inviteUrlCreated": "Invite link copied to clipboard",
	"settings.users.inviteUrlCreated.message": "Send the invite link to your invitee for activation",
	"settings.users.passwordResetUrlCreated": "Password reset link copied to clipboard",
	"settings.users.passwordResetUrlCreated.message": "Send the reset link to your user for them to reset their password",
	"settings.users.passwordResetLinkError": "Could not retrieve password reset link",
	"settings.users.allowSSOManualLogin": "Manual Login Allowed",
	"settings.users.allowSSOManualLogin.message": "User can now login manually and through SSO",
	"settings.users.disallowSSOManualLogin": "Manual Login Disallowed",
	"settings.users.disallowSSOManualLogin.message": "User must now login through SSO only",
	"settings.users.multipleInviteUrlsCreated": "Invite links created",
	"settings.users.multipleInviteUrlsCreated.message": "Send the invite links to your invitees for activation",
	"settings.users.newEmailsToInvite": "New User Email Addresses",
	"settings.users.noUsersToInvite": "No users to invite",
	"settings.users.setupMyAccount": "Set up my owner account",
	"settings.users.setupToInviteUsers": "To invite users, set up your own account",
	"settings.users.setupToInviteUsersInfo": "Invited users won’t be able to see workflows and credentials of other users unless you upgrade. <a href=\"https://docs.n8n.io/user-management/\" target=\"_blank\">More info</a> <br /> <br />",
	"settings.users.smtpToAddUsersWarning": "Set up SMTP before adding users (so that n8n can send them invitation emails). <a target=\"_blank\" href=\"https://docs.n8n.io/hosting/authentication/user-management-self-hosted/\">Instructions</a>",
	"settings.users.transferWorkflowsAndCredentials": "Transfer their workflows and credentials to another user or project",
	"settings.users.transferWorkflowsAndCredentials.user": "User or project to transfer to",
	"settings.users.transferWorkflowsAndCredentials.placeholder": "Select project or user",
	"settings.users.transferredToUser": "Data transferred to {projectName}",
	"settings.users.userNotFound": "User not found",
	"settings.users.userDeleted": "User deleted",
	"settings.users.userDeletedError": "Problem while deleting user",
	"settings.users.userInvited": "User invited",
	"settings.users.userInvitedError": "User could not be invited",
	"settings.users.userReinviteError": "Could not reinvite user",
	"settings.users.userToTransferTo": "User to transfer to",
	"settings.users.usersEmailedError": "Couldn't send invite email",
	"settings.users.usersInvited": "Users invited",
	"settings.users.usersInvitedError": "Could not invite users",
	"settings.users.advancedPermissions.warning": "{link} to unlock the ability to create additional admin users",
	"settings.users.userRoleUpdated": "Changes saved",
	"settings.users.userRoleUpdated.message": "{user} has been successfully updated to a {role}",
	"settings.users.userRoleUpdatedError": "Unable to updated role",
	"settings.users.table.update.error": "Failed to update table",
	"settings.users.table.header.user": "@:_reusableBaseText.user",
	"settings.users.table.header.accountType": "Account Type",
	"settings.users.table.header.2fa": "2FA",
	"settings.users.table.header.lastActive": "Last Active",
	"settings.users.table.row.allProjects": "All projects",
	"settings.users.table.row.personalProject": "Personal project",
	"settings.users.table.row.deleteUser": "Remove user",
	"settings.users.table.row.role.description.admin": "Full access to all workflows, credentials, projects, users and more",
	"settings.users.table.row.role.description.member": "Manage and create own workflows and credentials",
	"settings.users.table.row.2fa.enabled": "@:_reusableBaseText.enabled",
	"settings.users.table.row.2fa.disabled": "@:_reusableBaseText.disabled",
	"settings.projectRoles": "Project roles",
	"settings.api": "API",
	"settings.api.scopes.upgrade": "{link} to unlock the ability to modify API key scopes",
	"settings.n8napi": "n8n API",
	"settings.log-streaming": "Log Streaming",
	"settings.log-streaming.heading": "Log Streaming",
	"settings.log-streaming.add": "Add new destination",
	"settings.log-streaming.actionBox.title": "Available on the Enterprise plan",
	"settings.log-streaming.actionBox.description": "Log Streaming is available as a paid feature. Learn more about it.",
	"settings.log-streaming.actionBox.button": "See plans",
	"settings.log-streaming.infoText": "Send logs to external endpoints of your choice. You can also write logs to a file or the console using environment variables. <a href=\"https://docs.n8n.io/log-streaming/\" target=\"_blank\">More info</a>",
	"settings.log-streaming.addFirstTitle": "Set up a destination to get started",
	"settings.log-streaming.addFirst": "Add your first destination by clicking on the button and selecting a destination type.",
	"settings.log-streaming.saving": "Saving",
	"settings.log-streaming.delete": "Delete",
	"settings.log-streaming.continue": "Continue",
	"settings.log-streaming.selecttype": "Select type to create",
	"settings.log-streaming.selecttypehint": "Select the type for the new log stream destination",
	"settings.log-streaming.tab.settings": "Settings",
	"settings.log-streaming.tab.events": "Events",
	"settings.log-streaming.tab.events.title": "Select groups or single events to subscribe to:",
	"settings.log-streaming.tab.events.anonymize": "Anonymize sensitive data",
	"settings.log-streaming.tab.events.anonymize.info": "Fields containing personal information like name or email are anonymized",
	"settings.log-streaming.eventGroup.n8n.ai": "AI node logs",
	"settings.log-streaming.eventGroup.n8n.audit": "Audit Events",
	"settings.log-streaming.eventGroup.n8n.audit.info": "Will send events when user details or other audit data changes",
	"settings.log-streaming.eventGroup.n8n.workflow": "Workflow Events",
	"settings.log-streaming.eventGroup.n8n.workflow.info": "Will send workflow execution events",
	"settings.log-streaming.eventGroup.n8n.user": "User",
	"settings.log-streaming.eventGroup.n8n.node": "Node Executions",
	"settings.log-streaming.eventGroup.n8n.node.info": "Will send step-wise execution events every time a node executes. Please note that this can lead to a high frequency of logged events and is probably not suitable for general use.",
	"settings.log-streaming.eventGroup.n8n.runner": "Runner tasks",
	"settings.log-streaming.eventGroup.n8n.runner.info": "Will send an event when a Code node execution is requested from a task runner, and when a response is received from the runner with the result.",
	"settings.log-streaming.eventGroup.n8n.queue": "Queue events",
	"settings.log-streaming.eventGroup.n8n.queue.info": "Will send an event when a queue-related event occurs, e.g. enqueuing, dequeueing, completion, failure, or stalling.",
	"settings.log-streaming.eventGroup.n8n.worker": "Worker",
	"settings.log-streaming.$$AbstractMessageEventBusDestination": "Generic",
	"settings.log-streaming.$$MessageEventBusDestinationWebhook": "Webhook",
	"settings.log-streaming.$$MessageEventBusDestinationSentry": "Sentry",
	"settings.log-streaming.$$MessageEventBusDestinationRedis": "Redis",
	"settings.log-streaming.$$MessageEventBusDestinationSyslog": "Syslog",
	"settings.log-streaming.destinationDelete.cancelButtonText": "",
	"settings.log-streaming.destinationDelete.confirmButtonText": "Yes, delete",
	"settings.log-streaming.destinationDelete.headline": "Delete Destination?",
	"settings.log-streaming.destinationDelete.message": "Are you sure that you want to delete '{destinationName}'?",
	"settings.log-streaming.addDestination": "Add new destination",
	"settings.log-streaming.destinations": "Log destinations",
	"settings.api.trial.upgradePlan.title": "Upgrade to use API",
	"settings.api.trial.upgradePlan.description": "To prevent abuse, we limit API access to your workspace during your trial. If this is hindering your evaluation of n8n, please contact <a href=\"mailto:support{'@'}n8n.io\">support{'@'}n8n.io</a>",
	"settings.api.trial.upgradePlan.cta": "Upgrade plan",
	"settings.api.create.description": "Control n8n programmatically using the <a href=\"https://docs.n8n.io/api\" target=\"_blank\">n8n API</a>",
	"settings.api.create.button": "Create an API Key",
	"settings.api.create.button.loading": "Creating API Key...",
	"settings.api.create.error": "API Key creation failed.",
	"settings.api.edit.error": "API Key update failed.",
	"settings.api.delete.title": "Delete this API Key?",
	"settings.api.delete.description": "Any application using this API Key will no longer have access to n8n. This operation cannot be undone.",
	"settings.api.delete.button": "Delete Forever",
	"settings.api.delete.error": "Deleting the API Key failed.",
	"settings.api.delete.toast": "API Key deleted",
	"settings.api.create.toast": "API Key created",
	"settings.api.update.toast": "API Key updated",
	"settings.api.creationTime": "API key was created on {time}",
	"settings.api.expirationTime": "Expires on {time}",
	"settings.api.expired": "This API key has expired",
	"settings.api.neverExpires": "Never expires",
	"settings.api.view.copy.toast": "API Key copied to clipboard",
	"settings.api.view.apiPlayground": "API Playground",
	"settings.api.view.info": "Use your API Key to control n8n programmatically using the {apiAction}. But if you only want to trigger workflows, consider using the {webhookAction} instead.",
	"settings.api.view.copy": "Make sure to copy your API key now as you will not be able to see this again.",
	"settings.api.view.info.api": "n8n API",
	"settings.api.view.info.webhook": "webhook node",
	"settings.api.view.tryapi": "Try it out using the",
	"settings.api.view.more-details": "You can find more details in",
	"settings.api.view.external-docs": "the API documentation",
	"settings.api.view.error": "Could not check if an api key already exists.",
	"settings.api.view.modal.form.label": "Label",
	"settings.api.view.modal.form.expiration": "Expiration",
	"settings.api.view.modal.form.expirationText": "The API key will expire on {expirationDate}",
	"settings.api.view.modal.form.label.placeholder": "e.g Internal Project",
	"settings.api.view.modal.form.expiration.custom": "Custom",
	"settings.api.view.modal.form.expiration.days": "{numberOfDays} days",
	"settings.api.view.modal.form.expiration.none": "No Expiration",
	"settings.api.view.modal.title.created": "API Key Created",
	"settings.api.view.modal.title.create": "Create API Key",
	"settings.api.view.modal.title.edit": "Edit API Key",
	"settings.api.view.modal.done.button": "Done",
	"settings.api.view.modal.save.button": "Save",
	"settings.api.scopes.placeholder": "Select",
	"settings.api.scopes.selectAll": "Select All",
	"settings.api.scopes.label": "Scopes",
	"settings.version": "Version",
	"settings.usageAndPlan.title": "Usage and plan",
	"settings.usageAndPlan.description": "You’re on the {name} {type}",
	"settings.usageAndPlan.plan": "Plan",
	"settings.usageAndPlan.callOut": "{link} selected paid features for free (forever)",
	"settings.usageAndPlan.callOut.link": "Unlock",
	"settings.usageAndPlan.edition": "Edition",
	"settings.usageAndPlan.error": "@:_reusableBaseText.error",
	"settings.usageAndPlan.activeWorkflows": "Active workflows",
	"settings.usageAndPlan.activeWorkflows.unlimited": "@:_reusableBaseText.unlimited",
	"settings.usageAndPlan.activeWorkflows.count": "{count} of {limit}",
	"settings.usageAndPlan.activeWorkflows.hint": "Active workflows with multiple triggers count multiple times",
	"settings.usageAndPlan.button.activation": "Enter activation key",
	"settings.usageAndPlan.button.plans": "View plans",
	"settings.usageAndPlan.button.manage": "Manage plan",
	"settings.usageAndPlan.dialog.activation.title": "Enter activation key",
	"settings.usageAndPlan.dialog.activation.label": "Activation key",
	"settings.usageAndPlan.dialog.activation.activate": "@:_reusableBaseText.activate",
	"settings.usageAndPlan.dialog.activation.cancel": "@:_reusableBaseText.cancel",
	"settings.usageAndPlan.license.activation.error.title": "Activation failed",
	"settings.usageAndPlan.license.activation.success.title": "License activated",
	"settings.usageAndPlan.license.activation.success.message": "Your {name} {type} has been successfully activated.",
	"settings.usageAndPlan.license.communityRegistered.tooltip": "You have registered your email to unlock additional features on your community plan",
	"settings.provisioning.title": "Provisioning",
	"settings.provisioning.description": "Configure user provisioning settings and manage automated user lifecycle management.",
	"settings.provisioning.loadError": "Failed to load provisioning configuration",
	"settings.provisioning.saveError": "Failed to save provisioning configuration",
	"settings.provisioning.saveSuccess": "Configuration Saved",
	"settings.provisioning.saveSuccessMessage": "Provisioning configuration has been successfully updated.",
	"settings.provisioning.save": "Save Configuration",
	"settings.provisioning.scopesName": "Scopes Name",
	"settings.provisioning.scopesName.placeholder": "Enter scope name",
	"settings.provisioning.scopesName.help": "The name of the scope for provisioning, this is the scope that will be requested during Oauth flows",
	"settings.provisioning.scopesInstanceRoleClaimName": "Instance Role Claim Name",
	"settings.provisioning.scopesInstanceRoleClaimName.placeholder": "Enter instance role claim name",
	"settings.provisioning.scopesInstanceRoleClaimName.help": "The claim name used to provision instance roles from Oauth. For SAML / LDAP, this will be the attribute name checked.",
	"settings.provisioning.scopesProjectsRolesClaimName": "Projects Roles Claim Name",
	"settings.provisioning.scopesProjectsRolesClaimName.placeholder": "Enter projects roles claim name",
	"settings.provisioning.scopesProjectsRolesClaimName.help": "The claim name used to provision projects and their roles from Oauth. For SAML / LDAP, this will be the attribute name checked.",
	"settings.provisioning.scopesProvisionInstanceRole": "Provision Instance Role",
	"settings.provisioning.scopesProvisionInstanceRole.help": "Enable automatic provisioning of instance roles",
	"settings.provisioning.scopesProvisionProjectRoles": "Provision Project Roles",
	"settings.provisioning.scopesProvisionProjectRoles.help": "Enable automatic provisioning of projects and project roles",
	"settings.provisioning.scopesProvisioningFrequency": "Provisioning Frequency",
	"settings.provisioning.scopesProvisioningFrequency.placeholder": "Select provisioning frequency",
	"settings.provisioning.scopesProvisioningFrequency.help": "How often to provision projects and roles",
	"settings.externalSecrets.title": "External Secrets",
	"settings.externalSecrets.info": "Connect external secrets tools for centralized credentials management across environments, and to enhance system security.",
	"settings.externalSecrets.info.link": "More info",
	"settings.externalSecrets.actionBox.title": "Available on the Enterprise plan",
	"settings.externalSecrets.actionBox.description": "Connect external secrets tools for centralized credentials management across instances. {link}",
	"settings.externalSecrets.actionBox.description.link": "More info",
	"settings.externalSecrets.actionBox.buttonText": "See plans",
	"settings.externalSecrets.card.setUp": "Set Up",
	"settings.externalSecrets.card.deprecated": "deprecated",
	"settings.externalSecrets.card.secretsCount": "{count} secrets",
	"settings.externalSecrets.card.connectedAt": "Connected {date}",
	"settings.externalSecrets.card.connected": "Enabled",
	"settings.externalSecrets.card.disconnected": "Disabled",
	"settings.externalSecrets.card.actionDropdown.setup": "Edit connection",
	"settings.externalSecrets.card.actionDropdown.reload": "Reload secrets",
	"settings.externalSecrets.card.reload.success.title": "Reloaded successfully",
	"settings.externalSecrets.card.reload.success.description": "All secrets have been reloaded from {provider}.",
	"settings.externalSecrets.provider.title": "Commit and push changes",
	"settings.externalSecrets.provider.description": "Select the files you want to stage in your commit and add a commit message. ",
	"settings.externalSecrets.provider.buttons.cancel": "Cancel",
	"settings.externalSecrets.provider.buttons.save": "Save",
	"settings.externalSecrets.provider.buttons.saving": "Saving",
	"settings.externalSecrets.card.connectedSwitch.title": "Enable {provider}",
	"settings.externalSecrets.provider.save.success.title": "Provider settings saved successfully",
	"settings.externalSecrets.provider.connected.success.title": "Provider connected successfully",
	"settings.externalSecrets.provider.disconnected.success.title": "Provider disconnected successfully",
	"settings.externalSecrets.provider.testConnection.success.connected": "Service enabled, {count} secrets available on {provider}.",
	"settings.externalSecrets.provider.testConnection.success.connected.usage": "Use secrets in credentials by setting a parameter to an expression and typing: {code}. ",
	"settings.externalSecrets.provider.testConnection.success.connected.docs": "More info",
	"settings.externalSecrets.provider.testConnection.success": "Connection to {provider} executed successfully. Enable the service to use the secrets in credentials.",
	"settings.externalSecrets.provider.testConnection.error.connected": "Connection unsuccessful, please check your {provider} settings",
	"settings.externalSecrets.provider.testConnection.error": "Connection unsuccessful, please check your {provider} settings",
	"settings.externalSecrets.provider.closeWithoutSaving.title": "Close without saving?",
	"settings.externalSecrets.provider.closeWithoutSaving.description": "Are you sure you want to throw away the changes you made to the {provider} settings?",
	"settings.externalSecrets.provider.closeWithoutSaving.cancel": "Close",
	"settings.externalSecrets.provider.closeWithoutSaving.confirm": "Keep editing",
	"settings.externalSecrets.docs": "https://docs.n8n.io/external-secrets/",
	"settings.externalSecrets.docs.use": "https://docs.n8n.io/external-secrets/#use-secrets-in-n8n-credentials",
	"settings.sourceControl.title": "Environments",
	"settings.sourceControl.actionBox.title": "Available on the Enterprise plan",
	"settings.sourceControl.actionBox.description": "Use multiple instances for different environments (dev, prod, etc.), deploying between them via a Git repository.",
	"settings.sourceControl.actionBox.description.link": "More info",
	"settings.sourceControl.actionBox.buttonText": "See plans",
	"settings.sourceControl.connection.error": "Source control failed to connect",
	"settings.sourceControl.connection.error.message": "We couldn't find the repository connected to this instance. Please double-check your {link} on this instance.",
	"settings.sourceControl.connection.error.link": "Git configuration",
	"settings.sourceControl.description": "Use multiple instances for different environments (dev, prod, etc.), deploying between them via a Git repository. {link}",
	"settings.sourceControl.description.link": "More info",
	"settings.sourceControl.gitConfig": "Git configuration",
	"settings.sourceControl.connectionType": "Connection Type",
	"settings.sourceControl.enterValidHttpsUrl": "Please enter a valid HTTPS URL",
	"settings.sourceControl.repoUrl": "Git repository URL (SSH)",
	"settings.sourceControl.repoUrlPlaceholder": "e.g. git{'@'}github.com:my-team/my-repository",
	"settings.sourceControl.repoUrlInvalid": "The Git repository URL is not valid",
	"settings.sourceControl.authorName": "Commit author  name",
	"settings.sourceControl.authorEmail": "Commit author  email",
	"settings.sourceControl.authorEmailInvalid": "The provided email is not correct",
	"settings.sourceControl.sshKey": "SSH Key",
	"settings.sourceControl.sshKeyDescription": "Paste the SSH key in your git repository/account settings. {link}",
	"settings.sourceControl.sshKeyDescriptionLink": "More info",
	"settings.sourceControl.refreshSshKey": "Refresh Key",
	"settings.sourceControl.refreshSshKey.successful.title": "SSH Key refreshed successfully",
	"settings.sourceControl.refreshSshKey.error.title": "SSH Key refresh failed",
	"settings.sourceControl.button.continue": "Continue",
	"settings.sourceControl.button.connect": "Connect",
	"settings.sourceControl.button.disconnect": "Disconnect Git",
	"settings.sourceControl.button.save": "Save settings",
	"settings.sourceControl.instanceSettings": "Instance settings",
	"settings.sourceControl.branches": "Branch connected to this n8n instance",
	"settings.sourceControl.protected": "{bold}: prevent editing workflows (recommended for production environments).",
	"settings.sourceControl.protected.bold": "Protected instance",
	"settings.sourceControl.color": "Color",
	"settings.sourceControl.switchBranch.title": "Switch to {branch} branch",
	"settings.sourceControl.switchBranch.description": "Please confirm you want to switch the current n8n instance to the branch: {branch}",
	"settings.sourceControl.sync.prompt.title": "Sync changes in {branch} branch",
	"settings.sourceControl.sync.prompt.description": "All the changes on your n8n instances will be synced with branch {branch} on the remote git repository. The following git sequence will be executed: pull > commit > push.",
	"settings.sourceControl.sync.prompt.placeholder": "Commit message",
	"settings.sourceControl.sync.prompt.error": "Please enter a commit message",
	"settings.sourceControl.button.push": "Push",
	"settings.sourceControl.button.pull": "Pull",
	"settings.sourceControl.button.pull.forbidden": "Only the instance owner or instance admins can pull changes",
	"settings.sourceControl.button.push.forbidden": "You can't push changes from a protected instance",
	"settings.sourceControl.modals.push.title": "Commit and push changes",
	"settings.sourceControl.modals.push.description": "The following will be committed: ",
	"settings.sourceControl.modals.push.description.learnMore": "More info",
	"settings.sourceControl.modals.push.filesToCommit": "Files to commit",
	"settings.sourceControl.modals.push.filter": "Filters are applied. Showing {count} {entity}.",
	"settings.sourceControl.modals.push.workflowsToCommit": "Select workflows",
	"settings.sourceControl.modals.push.everythingIsUpToDate": "Everything is up to date",
	"settings.sourceControl.modals.push.noWorkflowChanges": "There are no workflow changes but the following will be committed: {link}",
	"settings.sourceControl.modals.push.noWorkflowChanges.moreInfo": "More info",
	"settings.sourceControl.modals.push.commitMessage": "Commit message",
	"settings.sourceControl.modals.push.commitMessage.placeholder": "e.g. My commit",
	"settings.sourceControl.modals.push.buttons.cancel": "Cancel",
	"settings.sourceControl.modals.push.buttons.save": "Commit and push",
	"settings.sourceControl.modals.push.success.title": "Pushed successfully",
	"settings.sourceControl.modals.push.success.description": "were committed and pushed to your remote repository",
	"settings.sourceControl.modals.push.projectAdmin.callout": "If you want to push workflows from your personal space, move then to a project first.",
	"settings.sourceControl.status.modified": "Modified",
	"settings.sourceControl.status.deleted": "Deleted",
	"settings.sourceControl.status.created": "New",
	"settings.sourceControl.status.renamed": "Renamed",
	"settings.sourceControl.pull.oneLastStep.title": "One last step",
	"settings.sourceControl.pull.oneLastStep.description": "You have new creds/vars. Fill them out to make sure your workflows function properly",
	"settings.sourceControl.pull.success.title": "Pulled successfully",
	"settings.sourceControl.pull.upToDate.title": "Up to date",
	"settings.sourceControl.pull.upToDate.description": "No workflow changes to pull from Git",
	"settings.sourceControl.pull.upToDate.variables.title": "Finish setting up your new variables to use in workflows",
	"settings.sourceControl.pull.upToDate.variables.description": "Review Variables",
	"settings.sourceControl.pull.upToDate.credentials.title": "Finish setting up your new credentials to use in workflows",
	"settings.sourceControl.pull.upToDate.credentials.description": "Review Credentials",
	"settings.sourceControl.modals.pull.title": "Pull changes",
	"settings.sourceControl.modals.pull.description": "These resources will be updated or deleted, and any local changes to them will be lost. To keep the local version, push it before pulling.",
	"settings.sourceControl.modals.pull.description.learnMore": "More info",
	"settings.sourceControl.modals.pull.buttons.cancel": "@:_reusableBaseText.cancel",
	"settings.sourceControl.modals.pull.buttons.save": "Pull and override",
	"settings.sourceControl.modals.disconnect.title": "Disconnect Git repository",
	"settings.sourceControl.modals.disconnect.message": "Please confirm you want to disconnect this n8n instance from the Git repository",
	"settings.sourceControl.modals.disconnect.confirm": "Disconnect Git",
	"settings.sourceControl.modals.disconnect.cancel": "@:_reusableBaseText.cancel",
	"settings.sourceControl.modals.refreshSshKey.title": "Refresh SSH Key",
	"settings.sourceControl.modals.refreshSshKey.message": "This will delete the current SSH key and create a new one. You will not be able to authenticate with the current key anymore.",
	"settings.sourceControl.modals.refreshSshKey.cancel": "Cancel",
	"settings.sourceControl.modals.refreshSshKey.confirm": "Refresh key",
	"settings.sourceControl.loading.connecting": "Connecting",
	"settings.sourceControl.toast.connected.title": "Git repository connected",
	"settings.sourceControl.toast.connected.message": "Select the branch to complete the configuration",
	"settings.sourceControl.toast.connected.error": "Error connecting to Git",
	"settings.sourceControl.toast.disconnected.title": "Git repository disconnected",
	"settings.sourceControl.toast.disconnected.message": "You can no longer sync your instance with the remote repository",
	"settings.sourceControl.toast.disconnected.error": "Error disconnecting from Git",
	"settings.sourceControl.loading.pull": "Pulling from remote",
	"settings.sourceControl.loading.checkingForChanges": "Checking for changes",
	"settings.sourceControl.loading.push": "Pushing to remote",
	"settings.sourceControl.lastUpdated": "Last updated {date} at {time}",
	"settings.sourceControl.saved.title": "Settings successfully saved",
	"settings.sourceControl.refreshBranches.tooltip": "Reload branches list",
	"settings.sourceControl.refreshBranches.success": "Branches successfully refreshed",
	"settings.sourceControl.refreshBranches.error": "Error refreshing branches",
	"settings.sourceControl.docs.url": "https://docs.n8n.io/source-control-environments/",
	"settings.sourceControl.docs.setup.url": "https://docs.n8n.io/source-control-environments/setup/",
	"settings.sourceControl.docs.setup.ssh.url": "https://docs.n8n.io/source-control-environments/setup/#step-3-set-up-a-deploy-key",
	"settings.sourceControl.docs.using.url": "https://docs.n8n.io/source-control-environments/using/",
	"settings.sourceControl.docs.using.pushPull.url": "https://docs.n8n.io/source-control-environments/using/push-pull",
	"settings.sourceControl.error.not.connected.title": "Environments have not been enabled",
	"settings.sourceControl.error.not.connected.message": "Please head over to <a href='/settings/environments'>environment settings</a> to connect a git repository first to activate this functionality.",
	"settings.sourceControl.saved.error": "Error setting branch",
	"settings.sourceControl.sshRepoUrl": "SSH Repository URL",
	"settings.sourceControl.httpsRepoUrl": "HTTPS Repository URL",
	"settings.sourceControl.sshRepoUrlPlaceholder": "git{'@'}github.com:user/repository.git",
	"settings.sourceControl.httpsRepoUrlPlaceholder": "https://github.com/user/repository.git",
	"settings.sourceControl.sshFormatNotice": "Use SSH format: git{'@'}github.com:user/repository.git",
	"settings.sourceControl.httpsFormatNotice": "Use HTTPS format: https://github.com/user/repository.git",
	"settings.sourceControl.httpsUsername": "Username",
	"settings.sourceControl.httpsUsernamePlaceholder": "Enter your GitHub username",
	"settings.sourceControl.httpsPersonalAccessToken": "Personal Access Token",
	"settings.sourceControl.httpsPersonalAccessTokenPlaceholder": "Enter your Personal Access Token (PAT)",
	"settings.sourceControl.httpsWarningNotice": "{strong} To create one for GitHub: Go to Settings → Developer settings → Personal access tokens → Tokens (classic). Required scopes: {repo} for private repositories or {publicRepo} for public ones. Other providers are also supported.",
	"settings.sourceControl.httpsWarningNotice.strong": "Personal Access Token required:",
	"showMessage.cancel": "@:_reusableBaseText.cancel",
	"showMessage.ok": "OK",
	"showMessage.showDetails": "Show Details",
	startupError,
	"startupError.message": "Could not connect to server. <a data-action='reload'>Refresh</a> to try again",
	"tagsDropdown.createTag": "Create tag \"{filter}\"",
	"tagsDropdown.manageTags": "Manage tags",
	"tagsDropdown.noMatchingTagsExist": "No matching tags exist",
	"tagsDropdown.noTagsExist": "No tags exist",
	"tagsDropdown.showError.message": "A problem occurred when trying to create the '{name}' tag",
	"tagsDropdown.showError.title": "Could not create tag",
	"tagsDropdown.typeToCreateATag": "Type to create a tag",
	"tagsManager.couldNotDeleteTag": "Could not delete tag",
	"tagsManager.done": "Done",
	"tagsManager.manageTags": "Manage tags",
	"tagsManager.showError.onFetch.title": "Could not fetch tags",
	"tagsManager.showError.onFetch.message": "A problem occurred when trying to fetch tags",
	"tagsManager.showError.onCreate.message": "A problem occurred when trying to create the tag '{escapedName}'",
	"tagsManager.showError.onCreate.title": "Could not create tag",
	"tagsManager.showError.onDelete.message": "A problem occurred when trying to delete the tag '{escapedName}'",
	"tagsManager.showError.onDelete.title": "Could not delete tag",
	"tagsManager.showError.onUpdate.message": "A problem occurred when trying to update the tag '{escapedName}'",
	"tagsManager.showError.onUpdate.title": "Could not update tag",
	"tagsManager.showMessage.onDelete.title": "Tag deleted",
	"tagsManager.showMessage.onUpdate.title": "Tag updated",
	"tagsManager.tagNameCannotBeEmpty": "Tag name cannot be empty",
	"tagsTable.areYouSureYouWantToDeleteThisTag": "Are you sure you want to delete this tag?",
	"tagsTable.cancel": "@:_reusableBaseText.cancel",
	"tagsTable.createTag": "Create tag",
	"tagsTable.deleteTag": "Delete tag",
	"tagsTable.editTag": "Edit Tag",
	"tagsTable.name": "@:_reusableBaseText.name",
	"tagsTable.noMatchingTagsExist": "No matching tags exist",
	"tagsTable.saveChanges": "Save changes?",
	"tagsTable.usage": "Usage",
	"tagsTableHeader.addNew": "Add new",
	"tagsTableHeader.searchTags": "Search Tags",
	"tagsView.inUse": "{count} workflow | {count} workflows",
	"tagsView.notBeingUsed": "Not being used",
	"onboarding.title": "Demo: {name}",
	"template.buttons.goBackButton": "Go back",
	"template.buttons.useThisWorkflowButton": "Use this workflow",
	"template.details.appsInTheCollection": "This collection features",
	"template.details.appsInTheWorkflow": "Apps in this workflow",
	"template.details.by": "by",
	"template.details.categories": "Categories",
	"template.details.created": "Created",
	"template.details.details": "Details",
	"template.details.times": "times",
	"template.details.viewed": "Viewed",
	"template.byAuthor": "By {name}",
	"templates.allCategories": "All Categories",
	"templates.categoriesHeading": "Categories",
	"templates.collection": "Collection",
	"templates.collections": "Collections",
	"templates.collectionsNotFound": "Collection could not be found",
	"templates.connectionWarning": "⚠️ There was a problem fetching workflow templates. Check your internet connection.",
	"templates.heading": "Workflow templates",
	"templates.shareWorkflow": "Share template",
	"templates.noSearchResults": "Nothing found. Try adjusting your search to see more.",
	"templates.searchPlaceholder": "Search workflows",
	"templates.workflows": "Workflows",
	"templates.workflowsNotFound": "Workflow could not be found",
	"textEdit.edit": "Edit",
	"userActivity.daysAgo": "{count} days ago",
	"userActivity.lastTime": "Last {time}",
	"userActivity.today": "Today",
	"userActivity.yesterday": "Yesterday",
	"timeAgo.daysAgo": "%s days ago",
	"timeAgo.hoursAgo": "%s hours ago",
	"timeAgo.inDays": "in %s days",
	"timeAgo.inHours": "in %s hours",
	"timeAgo.inMinutes": "in %s minutes",
	"timeAgo.inMonths": "in %s months",
	"timeAgo.inOneDay": "in 1 day",
	"timeAgo.inOneHour": "in 1 hour",
	"timeAgo.inOneMinute": "in 1 minute",
	"timeAgo.inOneMonth": "in 1 month",
	"timeAgo.inOneWeek": "in 1 week",
	"timeAgo.inOneYear": "in 1 year",
	"timeAgo.inWeeks": "in %s weeks",
	"timeAgo.inYears": "in %s years",
	"timeAgo.justNow": "Just now",
	"timeAgo.minutesAgo": "%s minutes ago",
	"timeAgo.monthsAgo": "%s months ago",
	"timeAgo.oneDayAgo": "1 day ago",
	"timeAgo.oneHourAgo": "1 hour ago",
	"timeAgo.oneMinuteAgo": "1 minute ago",
	"timeAgo.oneMonthAgo": "1 month ago",
	"timeAgo.oneWeekAgo": "1 week ago",
	"timeAgo.oneYearAgo": "1 year ago",
	"timeAgo.rightNow": "Right now",
	"timeAgo.weeksAgo": "%s weeks ago",
	"timeAgo.yearsAgo": "%s years ago",
	"nodeIssues.credentials.notSet": "Credentials for {type} are not set.",
	"nodeIssues.credentials.notAvailable": "Credential is not available",
	"nodeIssues.credentials.doNotExist": "Credentials with name {name} do not exist for {type}.",
	"nodeIssues.credentials.doNotExist.hint": "You can create credentials with the exact name and then they get auto-selected on refresh..",
	"nodeIssues.credentials.notIdentified": "Credentials with name {name} exist for {type}.",
	"nodeIssues.credentials.notIdentified.hint": "Credentials are not clearly identified. Please select the correct credentials.",
	"nodeIssues.input.missing": "No node connected to required input \"{inputName}\"",
	"ndv.trigger.moreInfo": "More info",
	"ndv.trigger.copiedTestUrl": "Test URL copied to clipboard",
	"ndv.trigger.webhookBasedNode.executionsHelp.inactive": "<b>While building your workflow</b>, click the 'execute step' button, then go to {service} and make an event happen. This will trigger an execution, which will show up in this editor.<br /> <br /> <b>Once you're happy with your workflow</b>, <a data-key=\"activate\">activate</a> it. Then every time there's a matching event in {service}, the workflow will execute. These executions will show up in the <a data-key=\"executions\">executions list</a>, but not in the editor.",
	"ndv.trigger.webhookBasedNode.executionsHelp.active": "<b>While building your workflow</b>, click the 'execute step' button, then go to {service} and make an event happen. This will trigger an execution, which will show up in this editor.<br /> <br /> <b>Your workflow will also execute automatically</b>, since it's activated. Every time there’s a matching event in {service}, this node will trigger an execution. These executions will show up in the <a data-key=\"executions\">executions list</a>, but not in the editor. ",
	"ndv.trigger.webhookNode.listening": "Listening for test event",
	"ndv.trigger.chatTrigger.openChat": "Open Chat Window",
	"ndv.trigger.webhookNode.formTrigger.listening": "Listening for a test form submission",
	"ndv.trigger.webhookBasedNode.listening": "Listening for your trigger event",
	"ndv.trigger.webhookNode.requestHint": "Make a {type} request to:",
	"ndv.trigger.webhookBasedNode.serviceHint": "Go to {service} and create an event",
	"ndv.trigger.webhookBasedNode.chatTrigger.serviceHint": "Send a message in the chat",
	"ndv.trigger.webhookBasedNode.formTrigger.serviceHint": "Submit the test form that just opened in a new tab",
	"ndv.trigger.webhookBasedNode.activationHint.inactive": "Once you’ve finished building your workflow, <a data-key=\"activate\">activate it</a> to have it also listen continuously (you just won’t see those executions here).",
	"ndv.trigger.webhookBasedNode.activationHint.active": "This node will also trigger automatically on new {service} events (but those executions won’t show up here).",
	"ndv.trigger.pollingNode.activationHint.inactive": "Once you’ve finished building your workflow, <a data-key=\"activate\">activate it</a> to have it also check for events regularly (you just won’t see those executions here).",
	"ndv.trigger.pollingNode.activationHint.active": "This node will also trigger automatically on new {service} events (but those executions won’t show up here).",
	"ndv.trigger.executionsHint.question": "When will this node trigger my flow?",
	"ndv.trigger.pollingNode.fetchingEvent": "Fetching event",
	"ndv.trigger.pollingNode.fetchingHint": "This node is looking for an event in {name} that is similar to the one you defined",
	"ndv.trigger.pollingNode.executionsHelp.inactive": "<b>While building your workflow</b>, click the 'fetch' button to fetch a single mock event. It will show up in this editor.<br /><br /><b>Once you're happy with your workflow</b>, <a data-key=\"activate\">activate</a> it. Then n8n will regularly check {service} for new events, and execute this workflow if it finds any. These executions will show up in the <a data-key=\"executions\">executions list</a>, but not in the editor.",
	"ndv.trigger.pollingNode.executionsHelp.active": "<b>While building your workflow</b>, click the 'fetch' button to fetch a single mock event. It will show up in this editor.<br /><br /><b>Your workflow will also execute automatically</b>, since it's activated. n8n will regularly check {app_name} for new events, and execute this workflow if it finds any. These executions will show up in the <a data-key=\"executions\">executions list</a>, but not in the editor.",
	"ndv.trigger.webhookBasedNode.action": "Pull in events from {name}",
	"ndv.search.placeholder.output": "Search output",
	"ndv.search.placeholder.input": "Search selected node",
	"ndv.search.placeholder.input.schema": "Search previous nodes' fields",
	"ndv.search.placeholder.shortcutHint": "Search ({shortcut})",
	"ndv.search.noMatch.title": "No matching items",
	"ndv.search.noNodeMatch.title": "No matching fields",
	"ndv.search.noMatch.description": "Try changing or {link} the filter to see more",
	"ndv.search.noMatch.description.link": "clearing",
	"ndv.search.noMatchSchema.description": "To search field values, switch to table or JSON view. {link}",
	"ndv.search.noMatchSchema.description.link": "Clear filter",
	"ndv.search.items": "{matched} of {count} item | {matched} of {count} items",
	"ndv.nodeHints.disabled": "This node is disabled, and will simply pass the input through",
	"ndv.nodeHints.alwaysOutputData": "This node will output an empty item if nothing would normally be returned",
	"ndv.nodeHints.alwaysOutputData.short": "output an empty item if nothing would normally be returned",
	"ndv.nodeHints.executeOnce": "This node will execute only once, no matter how many input items there are",
	"ndv.nodeHints.executeOnce.short": "execute only once, no matter how many input items there are",
	"ndv.nodeHints.retryOnFail": "This node will automatically retry if it fails",
	"ndv.nodeHints.retryOnFail.short": "automatically retry if it fails",
	"ndv.nodeHints.continueOnError": "Execution will continue even if the node fails",
	"ndv.nodeHints.continueOnError.short": "continue executing even if the node fails",
	"updatesPanel.andIs": "and is",
	"updatesPanel.behindTheLatest": "behind the latest and greatest n8n",
	"updatesPanel.howToUpdateYourN8nVersion": "How to update your n8n version",
	"updatesPanel.version": "{numberOfVersions} version{howManySuffix}",
	"updatesPanel.weVeBeenBusy": "We’ve been busy ✨",
	"updatesPanel.youReOnVersion": "You’re on {currentVersionName}, which was released",
	"versionCard.breakingChanges": "Breaking changes",
	"versionCard.released": "Released",
	"versionCard.securityUpdate": "Security update",
	"versionCard.thisVersionHasASecurityIssue": "This version has a security issue.<br />It is listed here for completeness.",
	"versionCard.unknown": "unknown",
	"versionCard.version": "Version",
	"workflowActivator.workflowIsActive": "Workflow is already active",
	"workflowActivator.activateWorkflow": "Activate workflow",
	"workflowActivator.deactivateWorkflow": "Deactivate workflow",
	"workflowActivator.active": "Active",
	"workflowActivator.inactive": "Inactive",
	"workflowActivator.showError.title": "Workflow could not be {newStateName}",
	"workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.message": "Please resolve outstanding issues before you activate it",
	"workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title": "Problem activating workflow",
	"workflowActivator.showMessage.activeChangedWorkflowIdUndefined.message": "Please save it before activating",
	"workflowActivator.showMessage.activeChangedWorkflowIdUndefined.title": "Problem activating workflow",
	"workflowActivator.showMessage.displayActivationError.message.catchBlock": "Sorry there was a problem requesting the error",
	"workflowActivator.showMessage.displayActivationError.message.errorDataNotUndefined": "The following error occurred on workflow activation:",
	"workflowActivator.showMessage.displayActivationError.message.errorDataUndefined": "Unknown error",
	"workflowActivator.showMessage.displayActivationError.title": "Problem activating workflow",
	"workflowActivator.theWorkflowIsSetToBeActiveBut": "The workflow is activated but could not be started.<br />Click to display error message.",
	"workflowActivator.thisWorkflowHasNoTriggerNodes": "This workflow has no trigger nodes that require activation",
	"workflowActivator.thisWorkflowIsArchived": "This workflow is archived so it cannot be activated",
	"workflowActivator.thisWorkflowHasOnlyOneExecuteWorkflowTriggerNode": "'Execute Workflow Trigger' doesn't require activation as it is triggered by another workflow",
	"workflowDetails.share": "Share",
	"workflowDetails.active": "Active",
	"workflowDetails.addTag": "Add tag",
	"workflowDetails.chooseOrCreateATag": "Choose or create a tag",
	"workflowProductionChecklist.title": "Production Checklist",
	"workflowProductionChecklist.readOnlyNotice": "Read-only environment. Update these items in development and push changes.",
	"workflowProductionChecklist.ignoreAllConfirmation.title": "Ignore suggested actions globally",
	"workflowProductionChecklist.ignoreAllConfirmation.description": "Turning this off dismisses these suggestions from every workflow",
	"workflowProductionChecklist.ignoreAllConfirmation.confirm": "Ignore for all workflows",
	"workflowProductionChecklist.turnOffWorkflowSuggestions": "Ignore for all workflows",
	"workflowProductionChecklist.evaluations.title": "Test reliability of AI steps",
	"workflowProductionChecklist.evaluations.description": "Use evaluations to check performance on a range of inputs.",
	"workflowProductionChecklist.errorWorkflow.title": "Set up error notifications",
	"workflowProductionChecklist.errorWorkflow.description": "Customize exactly how you’re notified by setting up an error workflow",
	"workflowProductionChecklist.timeSaved.title": "Track time saved",
	"workflowProductionChecklist.timeSaved.description": "Configure the time saved on each run to track the manual work it saves.",
	"workflowExtraction.error.failure": "Sub-workflow conversion failed",
	"workflowExtraction.error.selectionGraph.inputEdgeToNonRoot": "Non-input node '{node}' has a connection from a node outside the current selection.",
	"workflowExtraction.error.selectionGraph.outputEdgeFromNonLeaf": "Non-output node '{node}' has a connection to a node outside the current selection.",
	"workflowExtraction.error.selectionGraph.multipleInputNodes": "Multiple nodes [{nodes}] have inputs from outside the selection.",
	"workflowExtraction.error.selectionGraph.multipleOutputNodes": "Multiple nodes [{nodes}] have outputs to outside the selection.",
	"workflowExtraction.error.selectionGraph.noContinuousPathFromRootToLeaf": "First node '{start}' has no selected path to last node '{end}'.",
	"workflowExtraction.error.selectionGraph.listHeader": "Selection is invalid because of these errors:<br><br>{body}<br><br><a href=\"https://docs.n8n.io/workflows/subworkflow-conversion/\" target=\"_blank\">See docs</a> for more info.",
	"workflowExtraction.error.inputNodeHasMultipleInputBranches": "First node '{node}' has multiple input branches, which sub-workflows do not support.",
	"workflowExtraction.error.outputNodeHasMultipleOutputBranches": "Last node '{node}' has multiple output branches, which sub-workflows do not support.",
	"workflowExtraction.error.triggerSelected": "Triggers cannot be converted to a sub-workflow. Please unselect {nodes}.",
	"workflowExtraction.error.subworkflowCreationFailed": "Sub-workflow creation failed, aborting conversion.",
	"workflowExtraction.success.title": "Created sub-workflow",
	"workflowExtraction.success.message": "<a href=\"{url}\" target=\"_blank\">Open in new Tab</a>",
	"workflowExtraction.modal.title": "Convert to sub-workflow",
	"workflowExtraction.modal.description": "Convert {nodeCount} node to a new sub-workflow | Convert {nodeCount} nodes to a new sub-workflow",
	"workflowHelpers.showMessage.title": "Problem saving workflow",
	"workflowOpen.active": "Active",
	"workflowOpen.couldNotLoadActiveWorkflows": "Could not load active workflows",
	"workflowOpen.created": "Created",
	"workflowOpen.filterWorkflows": "Filter by tags",
	"workflowOpen.name": "@:_reusableBaseText.name",
	"workflowOpen.openWorkflow": "Open Workflow",
	"workflowOpen.searchWorkflows": "Search workflows...",
	"workflowOpen.showError.title": "Problem loading workflows",
	"workflowOpen.showMessage.message": "This is the current workflow",
	"workflowOpen.showMessage.title": "Workflow already open",
	"workflowOpen.updated": "Updated",
	"workflowOpen.newWFButton.label": "Add workflow",
	"workflowOpen.newWFButton.title": "Create a new workflow",
	"workflowPreview.showError.arrayEmpty": "Must have an array of nodes",
	"workflowPreview.showError.missingWorkflow": "Missing workflow",
	"workflowPreview.showError.previewError.message": "Unable to preview workflow",
	"workflowPreview.showError.missingExecution": "Missing workflow execution",
	"workflowPreview.executionMode.showError.previewError.message": "Unable to preview workflow execution",
	"workflowPreview.showError.previewError.title": "Preview error",
	"workflowRun.noActiveConnectionToTheServer": "Lost connection to the server",
	"workflowRun.showError.deactivate": "Deactivate workflow to execute",
	"workflowRun.showError.productionActive": "Because of limitations in {nodeName}, n8n can't listen for test executions at the same time as listening for production ones",
	"workflowRun.showError.title": "Problem running workflow",
	"workflowRun.showError.payloadTooLarge": "Please execute the whole workflow, rather than just the node. (Existing execution data is too large.)",
	"workflowRun.showError.resolveOutstandingIssues": "Please resolve outstanding issues before you activate it",
	"workflowRun.showMessage.message": "Please fix them before executing",
	"workflowRun.showMessage.title": "Workflow has issues",
	"workflowSettings.callerIds": "IDs of workflows that can call this one",
	"workflowSettings.callerIds.placeholder": "e.g. 14, 18",
	"workflowSettings.callerPolicy": "This workflow can be called by",
	"workflowSettings.callerPolicy.options.any": "Any workflow",
	"workflowSettings.callerPolicy.options.workflowsFromPersonalProject": "Workflows created by {projectName}",
	"workflowSettings.callerPolicy.options.workflowsFromTeamProject": "Only workflows in {projectName}",
	"workflowSettings.callerPolicy.options.workflowsFromSameProject": "Only workflows in the same project",
	"workflowSettings.callerPolicy.options.workflowsFromAList": "Selected workflows",
	"workflowSettings.callerPolicy.options.none": "No other workflows",
	"workflowSettings.defaultTimezone": "Default - {defaultTimezoneValue}",
	"workflowSettings.defaultTimezoneNotValid": "Default Timezone not valid",
	"workflowSettings.errorWorkflow": "Error Workflow (to notify when this one errors)",
	"workflowSettings.executionOrder": "Execution Order",
	"workflowSettings.helpTexts.errorWorkflow": "A second workflow to run if the current one fails.<br />The second workflow should have an 'Error Trigger' node.",
	"workflowSettings.helpTexts.executionTimeout": "How long the workflow should wait before timing out",
	"workflowSettings.helpTexts.executionTimeoutToggle": "Whether to cancel workflow execution after a defined time",
	"workflowSettings.helpTexts.saveDataErrorExecution": "Whether to save data of executions that fail",
	"workflowSettings.helpTexts.saveDataSuccessExecution": "Whether to save data of executions that finish successfully",
	"workflowSettings.helpTexts.saveExecutionProgress": "Whether to save data after each node execution. This allows you to resume from where execution stopped if there is an error, but may increase latency.",
	"workflowSettings.helpTexts.saveManualExecutions": "Whether to save data of executions that are started manually from the editor",
	"workflowSettings.helpTexts.timezone": "The timezone in which the workflow should run. Used by 'cron' node, for example.",
	"workflowSettings.helpTexts.workflowCallerIds": "The IDs of the workflows that are allowed to execute this one (using an ‘execute workflow’ node). The ID can be found at the end of the workflow’s URL. Separate multiple IDs by commas.",
	"workflowSettings.helpTexts.workflowCallerPolicy": "Workflows that are allowed to call this workflow using the Execute Workflow node",
	"workflowSettings.hours": "hours",
	"workflowSettings.minutes": "minutes",
	"workflowSettings.name": "Workflow name",
	"workflowSettings.noWorkflow": "- No Workflow -",
	"workflowSettings.save": "@:_reusableBaseText.save",
	"workflowSettings.saveDataErrorExecution": "Save failed production executions",
	"workflowSettings.saveDataErrorExecutionOptions.defaultSave": "Default - {defaultValue}",
	"workflowSettings.saveDataErrorExecutionOptions.doNotSave": "Do not save",
	"workflowSettings.saveDataErrorExecutionOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveDataSuccessExecution": "Save successful production executions",
	"workflowSettings.saveDataSuccessExecutionOptions.defaultSave": "Default - {defaultValue}",
	"workflowSettings.saveDataSuccessExecutionOptions.doNotSave": "Do not save",
	"workflowSettings.saveDataSuccessExecutionOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveExecutionProgress": "Save execution progress",
	"workflowSettings.saveExecutionProgressOptions.defaultSave": "Default - {defaultValue}",
	"workflowSettings.saveExecutionProgressOptions.doNotSave": "Do not save",
	"workflowSettings.saveExecutionProgressOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.saveManualExecutions": "Save manual executions",
	"workflowSettings.saveManualOptions.defaultSave": "Default - {defaultValue}",
	"workflowSettings.saveManualOptions.doNotSave": "Do not save",
	"workflowSettings.saveManualOptions.save": "@:_reusableBaseText.save",
	"workflowSettings.seconds": "seconds",
	"workflowSettings.selectOption": "Select Option",
	"workflowSettings.settingsFor": "Workflow settings for {workflowName} (#{workflowId})",
	"workflowSettings.showError.saveSettings1.errorMessage": "Timeout is activated but set to 0",
	"workflowSettings.showError.saveSettings1.message": "There was a problem saving the settings",
	"workflowSettings.showError.saveSettings1.title": "Problem saving settings",
	"workflowSettings.showError.saveSettings2.errorMessage": "Maximum Timeout is: {hours} hours, {minutes} minutes, {seconds} seconds",
	"workflowSettings.showError.saveSettings2.message": "The timeout is longer than allowed",
	"workflowSettings.showError.saveSettings2.title": "Problem saving settings",
	"workflowSettings.showError.saveSettings3.title": "Problem saving settings",
	"workflowSettings.showError.fetchSettings.title": "Problem fetching settings",
	"workflowSettings.showMessage.saveSettings.title": "Workflow settings saved",
	"workflowSettings.timeoutAfter": "Timeout After",
	"workflowSettings.timeoutWorkflow": "Timeout Workflow",
	"workflowSettings.executionTimeout": "Timeout Workflow",
	"workflowSettings.tags": "Tags",
	"workflowSettings.timezone": "Timezone",
	"workflowSettings.timeSavedPerExecution": "Estimated time saved",
	"workflowSettings.timeSavedPerExecution.hint": "Minutes per production execution",
	"workflowSettings.timeSavedPerExecution.tooltip": "Total time savings are summarised in the Overview page.",
	"workflowSettings.availableInMCP": "Available in MCP",
	"workflowSettings.availableInMCP.tooltip": "Make this workflow visible to AI Agents through n8n MCP",
	"workflowSettings.toggleMCP.error.title": "Error updating MCP settings",
	"workflowSettings.toggleMCP.notFoundError": "Workflow not found",
	"workflowHistory.title": "Version History",
	"workflowHistory.content.title": "Version",
	"workflowHistory.content.editedBy": "Edited by",
	"workflowHistory.content.versionId": "Version ID",
	"workflowHistory.content.actions": "Actions",
	"workflowHistory.item.id": "ID: {id}",
	"workflowHistory.item.createdAt": "{date} at {time}",
	"workflowHistory.item.actions.restore": "Restore this version",
	"workflowHistory.item.actions.clone": "Clone to new workflow",
	"workflowHistory.item.actions.open": "Open version in new tab",
	"workflowHistory.item.actions.download": "Download",
	"workflowHistory.item.unsaved.title": "Unsaved version",
	"workflowHistory.item.latest": "Latest saved",
	"workflowHistory.empty": "No versions yet.",
	"workflowHistory.hint": "Save the workflow to create the first version!",
	"workflowHistory.limit": "Version history is limited to {evaluatedPruneTime} days",
	"workflowHistory.upgrade": "{link} to activate full history",
	"workflowHistory.upgrade.link": "Upgrade plan",
	"workflowHistory.action.error.title": "Failed to {action}",
	"workflowHistory.action.restore.modal.title": "Restore previous workflow version?",
	"workflowHistory.action.restore.modal.subtitle": "Your workflow will revert to the version from {date}",
	"workflowHistory.action.restore.modal.text": "Your workflow is currently active, so production executions will immediately start using the restored version. If you'd like to deactivate it before restoring, click {buttonText}.",
	"workflowHistory.action.restore.modal.button.deactivateAndRestore": "Deactivate and restore",
	"workflowHistory.action.restore.modal.button.restore": "Restore",
	"workflowHistory.action.restore.modal.button.cancel": "Cancel",
	"workflowHistory.action.restore.success.title": "Successfully restored workflow version",
	"workflowHistory.action.clone.success.title": "Successfully cloned workflow version",
	"workflowHistory.action.clone.success.message": "Open cloned workflow in a new tab",
	"workflowHistory.button.tooltip.empty": "This workflow currently has no history to view. Once you've made your first save, you'll be able to view previous versions",
	"workflowHistory.button.tooltip.enabled": "Workflow history to view and restore previous versions of your workflows",
	"workflowHistory.button.tooltip.disabled": "Upgrade to unlock workflow history to view and restore previous versions of your workflows. {link}",
	"workflowHistory.button.tooltip.disabled.link": "View plans",
	"workflows.heading": "Workflows",
	"workflows.add": "Add workflow",
	"workflows.project.add": "Add workflow to project",
	"workflows.item.open": "Open",
	"workflows.item.share": "Share...",
	"workflows.item.duplicate": "Duplicate",
	"workflows.item.delete": "Delete",
	"workflows.item.archive": "Archive",
	"workflows.item.unarchive": "Unarchive",
	"workflows.item.move": "Move",
	"workflows.item.changeOwner": "Change owner",
	"workflows.item.updated": "Last updated",
	"workflows.item.created": "Created",
	"workflows.item.readonly": "Read only",
	"workflows.item.archived": "Archived",
	"workflows.item.availableInMCP": "Available in MCP",
	"workflows.item.enableMCPAccess": "Enable MCP access",
	"workflows.item.disableMCPAccess": "Remove MCP access",
	"workflows.itemSuggestion.try": "Try template",
	"workflows.templateRecoV2.starterTemplates": "Starter templates",
	"workflows.templateRecoV2.seeMoreStarterTemplates": "See more starter templates",
	"workflows.templateRecoV2.popularTemplates": "Popular templates",
	"workflows.templateRecoV2.seeMorePopularTemplates": "See more popular templates",
	"workflows.templateRecoV2.tutorials": "Tutorials",
	"workflows.templateRecoV2.loadingTemplates": "Loading templates...",
	"workflows.templateRecoV2.useTemplate": "Use template",
	"workflows.templateRecoV2.exploreTemplates": "Or explore templates to get inspired and learn fast:",
	"workflows.search.placeholder": "Search",
	"workflows.filters": "Filters",
	"workflows.filters.tags": "Tags",
	"workflows.filters.status": "Status",
	"workflows.filters.status.all": "All",
	"workflows.filters.status.active": "Active",
	"workflows.filters.status.deactivated": "Deactivated",
	"workflows.filters.showArchived": "Show archived workflows",
	"workflows.filters.ownedBy": "Owned by",
	"workflows.filters.sharedWith": "Shared with",
	"workflows.filters.apply": "Apply filters",
	"workflows.filters.reset": "Reset all",
	"workflows.filters.active": "Some workflows may be hidden since filters are applied.",
	"workflows.filters.active.shortText": "Filters are applied.",
	"workflows.filters.active.reset": "Remove filters",
	"workflows.sort.lastUpdated": "Sort by last updated",
	"workflows.sort.lastCreated": "Sort by last created",
	"workflows.sort.nameAsc": "Sort by name (A-Z)",
	"workflows.sort.nameDesc": "Sort by name (Z-A)",
	"workflows.noResults": "No workflows found",
	"workflows.noResults.withSearch.switchToShared.preamble": "some workflows may be",
	"workflows.noResults.withSearch.switchToShared.link": "hidden",
	"workflows.empty.heading": "👋 Welcome {name}!",
	"workflows.empty.heading.userNotSetup": "👋 Welcome!",
	"workflows.empty.description": "Create your first workflow",
	"workflows.empty.description.readOnlyEnv": "No workflows here yet",
	"workflows.empty.description.noPermission": "There are currently no workflows to view",
	"workflows.empty.startFromScratch": "Start from scratch",
	"workflows.empty.startWithTemplate": "Start with a template",
	"workflows.empty.browseTemplates": "Explore workflow templates",
	"workflows.empty.learnN8n": "Learn n8n",
	"workflows.empty.button.disabled.tooltip": "Your current role in the project does not allow you to create workflows",
	"workflows.empty.easyAI": "Test a simple AI Agent example",
	"workflows.empty.preBuiltAgents": "Try a pre-built agent",
	"workflows.empty.shared-with-me": "No {resource} has been shared with you",
	"workflows.empty.shared-with-me.link": "<a href=\"#\">Back to Personal</a>",
	"workflows.empty.readyToRunV2": "Try an AI workflow",
	"workflows.list.easyAI": "Test the power of AI in n8n with this simple AI Agent Workflow",
	"workflows.list.error.fetching.one": "Error fetching workflow",
	"workflows.list.error.fetching": "Error fetching workflows",
	"workflows.shareModal.title": "Share '{name}'",
	"workflows.shareModal.title.static": "Shared with {projectName}",
	"workflows.shareModal.select.placeholder": "Add users...",
	"workflows.shareModal.list.delete": "Remove access",
	"workflows.shareModal.list.delete.confirm.title": "Remove {name}'s access?",
	"workflows.shareModal.list.delete.confirm.lastUserWithAccessToCredentials.message": "If you do this, the workflow will lose access to {name}’s credentials. <strong>Nodes that use those credentials will stop working</strong>.",
	"workflows.shareModal.list.delete.confirm.confirmButtonText": "Remove access",
	"workflows.shareModal.list.delete.confirm.cancelButtonText": "Cancel",
	"workflows.shareModal.onSave.success.title": "Sharing updated",
	"workflows.shareModal.onSave.error.title": "There was a problem saving sharing settings",
	"workflows.shareModal.saveBeforeClose.title": "Save sharing changes?",
	"workflows.shareModal.saveBeforeClose.message": "You have unsaved changes. Do you want to save them before closing?",
	"workflows.shareModal.saveBeforeClose.confirmButtonText": "Save",
	"workflows.shareModal.saveBeforeClose.cancelButtonText": "Close without saving",
	"workflows.shareModal.save": "Save",
	"workflows.shareModal.changesHint": "You made changes",
	"workflows.shareModal.info.sharee": "Only {workflowOwnerName} or users with workflow sharing permission can change who this workflow is shared with",
	"workflows.shareModal.info.sharee.fallback": "the owner",
	"workflows.shareModal.info.members": "This workflow is owned by the {projectName} project which currently has {members} with access to this workflow.",
	"workflows.shareModal.info.members.number": "{number} member | {number} members",
	"workflows.shareModal.role.editor": "@:_reusableBaseText.roles.editor",
	"workflows.roles.editor": "@:_reusableBaseText.roles.editor",
	"workflows.concurrentChanges.confirmMessage.title": "Workflow was changed by someone else",
	"workflows.concurrentChanges.confirmMessage.message": "Someone saved this workflow while you were editing it. You can <a href=\"{url}\" target=\"_blank\">view their version</a> (in new tab).<br/><br/>Overwrite their changes with yours?",
	"workflows.concurrentChanges.confirmMessage.cancelButtonText": "Cancel",
	"workflows.concurrentChanges.confirmMessage.confirmButtonText": "Overwrite and Save",
	"workflows.create.personal.toast.title": "Workflow successfully created inside your personal space",
	"workflows.create.project.toast.title": "Workflow successfully created in {projectName}",
	"workflows.create.folder.toast.title": "Workflow successfully created in \"{projectName}\", within \"{folderName}\"",
	"workflows.create.project.toast.text": "All members from {projectName} will have access to this workflow.",
	"workflows.deactivated": "Workflow deactivated",
	"workflows.ai.starter.collection.callout": "Learn how to build AI Agents in n8n",
	"workflows.ai.starter.collection.card": "Learn how to build AI Agents",
	"workflows.ai.starter.collection.folder.name": "🎁 n8n basics: Learn how to build Agents in n8n",
	"workflows.ai.starter.collection.error": "Error loading AI Agent starter collection. Please try again later.",
	"workflows.readyToRunWorkflows.card": "Try a workflow - no setup neeeded",
	"workflows.readyToRunWorkflows.card2": "Run a workflow",
	"workflows.readyToRunWorkflows.card3": "See n8n in action",
	"workflows.readyToRunWorkflows.callout": "See n8n in action - no setup needed",
	"workflows.readyToRunWorkflows.callout2": "Run a workflow",
	"workflows.readyToRunWorkflows.callout3": "See n8n in action",
	"workflows.readyToRunWorkflows.cta": "Run a workflow",
	"workflows.readyToRunWorkflows.folder.name": "🚀 Ready-to-run workflows",
	"workflows.readyToRunWorkflows.error": "Error loading n8n collection. Please try again later.",
	"workflows.archivedOnly.hint": "Archived workflows are hidden in this view. {link}",
	"workflows.archivedOnly.hint.link": "Update filters",
	"workflows.preBuiltAgents.callout": "Get started faster with our",
	"workflows.preBuiltAgents.linkText": "pre-built agents",
	"workflowSelectorParameterInput.createNewSubworkflow.name": "My Sub-Workflow",
	"importCurlModal.title": "Import cURL command",
	"importCurlModal.input.label": "cURL Command",
	"importCurlModal.input.placeholder": "Paste the cURL command here",
	"ImportCurlModal.notice.content": "This will overwrite any changes you have already made to the current node",
	"importCurlModal.button.label": "Import",
	"importCurlParameter.label": "Import cURL",
	"importCurlParameter.showError.invalidCurlCommand.title": "Couldn’t import cURL command",
	"importCurlParameter.showError.invalidCurlCommand.message": "This command is in an unsupported format",
	"importCurlParameter.showError.invalidProtocol1.title": "Use the {node} node",
	"importCurlParameter.showError.invalidProtocol2.title": "Invalid Protocol",
	"importCurlParameter.showError.invalidProtocol.message": "The HTTP node doesn’t support {protocol} requests",
	"variables.heading": "Variables",
	"variables.add": "Add variable",
	"variables.add.unavailable": "Upgrade plan to keep using variables",
	"variables.add.unavailable.empty": "Upgrade plan to start using variables",
	"variables.add.onlyOwnerCanCreate": "Only owner can create variables",
	"variables.empty.heading": "{name}, let's set up a variable",
	"variables.empty.heading.userNotSetup": "Set up a variable",
	"variables.empty.description": "Variables can be used to store data that can be referenced easily across multiple workflows.",
	"variables.empty.button": "Add first variable",
	"variables.empty.button.disabled.tooltip": "Your current role in the project does not allow you to create variables",
	"variables.empty.notAllowedToCreate.heading": "{name}, start using variables",
	"variables.empty.notAllowedToCreate.description": "Ask your n8n instance owner to create the variables you need. Once configured, you can utilize them in your workflows using the syntax $vars.MY_VAR.",
	"variables.filters.active": "Some variables may be hidden since filters are applied.",
	"variables.filters.active.reset": "Remove filters",
	"variables.noResults": "No variables found",
	"variables.sort.nameAsc": "Sort by name (A-Z)",
	"variables.sort.nameDesc": "Sort by name (Z-A)",
	"variables.table.key": "Key",
	"variables.table.value": "Value",
	"variables.table.usage": "Usage Syntax",
	"variables.table.scope": "Scope",
	"variables.table.scope.global": "Global",
	"variables.editing.key.placeholder": "Enter a name",
	"variables.editing.value.placeholder": "Enter a value",
	"variables.editing.key.error.regex": "This field may contain only letters, numbers, and underscores",
	"variables.row.button.save": "Save",
	"variables.row.button.cancel": "Cancel",
	"variables.row.button.edit": "Edit",
	"variables.row.button.edit.onlyRoleCanEdit": "Only instance owner and admins can edit variables",
	"variables.row.button.delete": "Delete",
	"variables.row.button.delete.onlyRoleCanDelete": "Only instance owner and can delete variables",
	"variables.row.usage.copiedToClipboard": "Copied to clipboard",
	"variables.row.usage.copyToClipboard": "Copy to clipboard",
	"variables.search.placeholder": "Search variables...",
	"variables.delete.successful.message": "Variable {variableName} deleted",
	"variables.errors.save": "Error while saving variable",
	"variables.errors.delete": "Error while deleting variable",
	"variables.modals.deleteConfirm.title": "Delete variable",
	"variables.modals.deleteConfirm.message": "Are you sure you want to delete the variable \"{name}\"? This cannot be undone.",
	"variables.modals.deleteConfirm.confirmButton": "Delete",
	"variables.modals.deleteConfirm.cancelButton": "Cancel",
	"variables.modal.title.create": "New variable",
	"variables.modal.title.edit": "Edit variable",
	"variables.modal.key.label": "Key",
	"variables.modal.value.label": "Value",
	"variables.modal.scope.label": "Scope",
	"variables.modal.scope.global": "Global",
	"variables.modal.scope.all": "All",
	"variables.modal.button.cancel": "Cancel",
	"variables.modal.button.save": "Save",
	"variables.modal.error.keyExistsInProject": "The key already exists in this project",
	"variables.modal.warning.globalKeyExists": "The same key already exists in global scope. This variable will override the global variable inside the project",
	"contextual.credentials.sharing.unavailable.title": "Upgrade to collaborate",
	"contextual.credentials.sharing.unavailable.title.cloud": "Upgrade to collaborate",
	"contextual.credentials.sharing.unavailable.description": "You can share credentials with others when you upgrade your plan.",
	"contextual.credentials.sharing.unavailable.description.cloud": "You can share credentials with others when you upgrade your plan.",
	"contextual.credentials.sharing.unavailable.button": "View plans",
	"contextual.credentials.sharing.unavailable.button.cloud": "Upgrade now",
	"contextual.workflows.sharing.title": "Sharing",
	"contextual.workflows.sharing.unavailable.title": "Sharing",
	"contextual.workflows.sharing.unavailable.title.cloud": "Upgrade to collaborate",
	"contextual.workflows.sharing.unavailable.description.modal": "You can collaborate with others on workflows when you upgrade your plan.",
	"contextual.workflows.sharing.unavailable.description.modal.cloud": "You can collaborate with others on workflows when you upgrade your plan.",
	"contextual.workflows.sharing.unavailable.description.tooltip": "You can collaborate with others on workflows when you upgrade your plan. {action}",
	"contextual.workflows.sharing.unavailable.description.tooltip.cloud": "You can collaborate with others on workflows when you upgrade your plan. {action}",
	"contextual.workflows.sharing.unavailable.button": "View plans",
	"contextual.workflows.sharing.unavailable.button.cloud": "Upgrade now",
	"contextual.variables.unavailable.title": "Available on the Enterprise plan",
	"contextual.variables.unavailable.title.cloud": "Available on Pro plan",
	"contextual.variables.unavailable.description": "Variables can be used to store and access data across workflows. Reference them in n8n using the prefix <code>$vars</code> (e.g. <code>$vars.myVariable</code>). Variables are immutable and cannot be modified within your workflows.<br/><a href=\"https://docs.n8n.io/code/variables/\" target=\"_blank\">Learn more in the docs.</a>",
	"contextual.variables.unavailable.button": "View plans",
	"contextual.variables.unavailable.button.cloud": "Upgrade now",
	"contextual.users.settings.unavailable.title": "Upgrade to add users",
	"contextual.users.settings.unavailable.title.cloud": "Upgrade to add users",
	"contextual.users.settings.unavailable.description": "Create multiple users on our higher plans and share workflows and credentials to collaborate",
	"contextual.users.settings.unavailable.description.cloud": "Create multiple users on our higher plans and share workflows and credentials to collaborate",
	"contextual.users.settings.unavailable.button": "View plans",
	"contextual.users.settings.unavailable.button.cloud": "Upgrade now",
	"contextual.feature.unavailable.title": "Available on the Enterprise Plan",
	"contextual.feature.unavailable.title.cloud": "Available on the Pro Plan",
	"dataTable.dataTables": "Data tables",
	"dataTable.empty.label": "You don't have any data tables yet",
	"dataTable.empty.description": "Use data tables to persist execution results, share data between workflows, and track metrics for evaluation.",
	"dataTable.card.size": "{size}MB",
	"dataTable.card.column.count": "{count} column | {count} columns",
	"dataTable.add.title": "Create new Data table",
	"dataTable.add.button.label": "Create Data table",
	"dataTable.add.input.name.label": "Data table name",
	"dataTable.add.input.name.placeholder": "Enter data table name",
	"dataTable.add.error": "Error creating data table",
	"dataTable.delete.confirm.title": "Delete Data table",
	"dataTable.delete.confirm.message": "Are you sure you want to delete the data table '{name}'? This action cannot be undone.",
	"dataTable.delete.error": "Error deleting data table",
	"dataTable.rename.error": "Error renaming data table",
	"dataTable.getDetails.error": "Error fetching data table details",
	"dataTable.notFound": "Data table not found",
	"dataTable.noColumns.heading": "No columns yet",
	"dataTable.noColumns.description": "Add columns to start storing data in this data table.",
	"dataTable.noColumns.button.label": "Add first column",
	"dataTable.addColumn.label": "Add Column",
	"dataTable.addColumn.nameInput.label": "@:_reusableBaseText.name",
	"dataTable.addColumn.nameInput.placeholder": "Enter column name",
	"dataTable.addColumn.typeInput.label": "@:_reusableBaseText.type",
	"dataTable.addColumn.error": "Error adding column",
	"dataTable.addColumn.alreadyExistsError": "This column already exists",
	"dataTable.addColumn.alreadyExistsDescription": "Column name already exists, choose a different name",
	"dataTable.moveColumn.error": "Error moving column",
	"dataTable.deleteColumn.error": "Error deleting column",
	"dataTable.deleteColumn.confirm.title": "Delete column",
	"dataTable.deleteColumn.confirm.message": "Are you sure you want to delete the column '{name}'? This action cannot be undone.",
	"dataTable.addColumn.invalidName.error": "Invalid column name",
	"dataTable.addColumn.invalidName.description": "Column names must begin with a letter and can only include letters, numbers, or underscores",
	"dataTable.fetchContent.error": "Error fetching data table content",
	"dataTable.addRow.label": "Add Row",
	"dataTable.addRow.error": "Error adding row",
	"dataTable.updateRow.error": "Error updating row",
	"dataTable.deleteRows.title": "Delete Rows",
	"dataTable.deleteRows.confirmation": "Are you sure you want to delete {count} row? | Are you sure you want to delete {count} rows?",
	"dataTable.deleteRows.error": "Error deleting rows",
	"dataTable.banner.storageLimitWarning.message": "{usage} of Data tables storage used. Delete data to avoid errors",
	"dataTable.banner.storageLimitError.message": "{usage} of Data tables storage used, operations may fail. Delete data to avoid errors",
	"dataTable.error.tableNotInitialized": "Table not initialized",
	"dataTable.noRows": "No rows",
	"dataTable.filters.isNull": "Is null",
	"dataTable.filters.isNotNull": "Is not null",
	"dataTable.filters.isEmpty": "Is empty",
	"dataTable.filters.isNotEmpty": "Is not empty",
	"dataTable.filters.between": "Between",
	"dataTable.filters.true": "True",
	"dataTable.filters.false": "False",
	"dataTable.filters.greaterThan": "Greater than",
	"dataTable.filters.greaterThanOrEqual": "Greater than or equal",
	"dataTable.filters.lessThan": "Less than",
	"dataTable.filters.lessThanOrEqual": "Less than or equal",
	"dataTable.addColumn.systemColumnDescription": "This is a system column, choose a different name",
	"dataTable.addColumn.testingColumnDescription": "This column is used for testing, choose a different name",
	"settings.ldap": "LDAP",
	"settings.ldap.note": "LDAP allows users to authenticate with their centralized account. It's compatible with services that provide an LDAP interface like Active Directory, Okta and Jumpcloud.",
	"settings.ldap.infoTip": "Learn more about <a href='https://docs.n8n.io/user-management/ldap/' target='_blank'>LDAP in the Docs</a>",
	"settings.ldap.save": "Save connection",
	"settings.ldap.connectionTestError": "Problem testing LDAP connection",
	"settings.ldap.connectionTest": "LDAP connection tested",
	"settings.ldap.runSync.title": "LDAP synchronization done",
	"settings.ldap.runSync.showError.message": "Problem during synchronization. Check the logs",
	"settings.ldap.updateConfiguration": "LDAP configuration updated",
	"settings.ldap.testingConnection": "Testing connection",
	"settings.ldap.testConnection": "Test connection",
	"settings.ldap.synchronizationTable.column.status": "Status",
	"settings.ldap.synchronizationTable.column.endedAt": "Ended At",
	"settings.ldap.synchronizationTable.column.runMode": "Run Mode",
	"settings.ldap.synchronizationTable.column.runTime": "Run Time",
	"settings.ldap.synchronizationTable.column.details": "Details",
	"settings.ldap.synchronizationTable.empty.message": "Test synchronization to preview updates",
	"settings.ldap.dryRun": "Test synchronization",
	"settings.ldap.synchronizeNow": "Run synchronization",
	"settings.ldap.synchronizationError": "LDAP Synchronization Error",
	"settings.ldap.configurationError": "LDAP Configuration Error",
	"settings.ldap.usersScanned": "Users scanned {scanned}",
	"settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText": "No",
	"settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText": "Yes, disable it",
	"settings.ldap.confirmMessage.beforeSaveForm.headline": "Are you sure you want to disable LDAP login?",
	"settings.ldap.confirmMessage.beforeSaveForm.message": "If you do so, all LDAP users will be converted to email users.",
	"settings.ldap.disabled.title": "Available on the Enterprise plan",
	"settings.ldap.disabled.description": "LDAP is available as a paid feature. Learn more about it.",
	"settings.ldap.disabled.buttonText": "See plans",
	"settings.ldap.toast.sync.success": "Synchronization succeeded",
	"settings.ldap.toast.connection.success": "Connection succeeded",
	"settings.ldap.form.loginEnabled.label": "Enable LDAP Login",
	"settings.ldap.form.loginEnabled.tooltip": "Connection settings and data will still be saved if you disable LDAP Login",
	"settings.ldap.form.loginLabel.label": "LDAP Login",
	"settings.ldap.form.loginLabel.placeholder": "e.g. LDAP Username or email address",
	"settings.ldap.form.loginLabel.infoText": "The placeholder text that appears in the login field on the login page",
	"settings.ldap.form.serverAddress.label": "LDAP Server Address",
	"settings.ldap.form.serverAddress.placeholder": "123.123.123.123",
	"settings.ldap.form.serverAddress.infoText": "IP or domain of the LDAP server",
	"settings.ldap.form.port.label": "LDAP Server Port",
	"settings.ldap.form.port.infoText": "Port used to connect to the LDAP server",
	"settings.ldap.form.connectionSecurity.label": "Connection Security",
	"settings.ldap.form.connectionSecurity.infoText": "Type of connection security",
	"settings.ldap.form.allowUnauthorizedCerts.label": "Ignore SSL/TLS Issues",
	"settings.ldap.form.baseDn.label": "Base DN",
	"settings.ldap.form.baseDn.placeholder": "o=acme,dc=example,dc=com",
	"settings.ldap.form.baseDn.infoText": "Distinguished Name of the location where n8n should start its search for user in the AD/LDAP tree",
	"settings.ldap.form.bindingType.label": "Binding as",
	"settings.ldap.form.bindingType.infoText": "Type of binding used to connection to the LDAP server",
	"settings.ldap.form.adminDn.label": "Binding DN",
	"settings.ldap.form.adminDn.placeholder": "uid=2da2de69435c,ou=Users,o=Acme,dc=com",
	"settings.ldap.form.adminDn.infoText": "Distinguished Name of the user to perform the search",
	"settings.ldap.form.adminPassword.label": "Binding Password",
	"settings.ldap.form.adminPassword.infoText": "Password of the user provided in the Binding DN field above",
	"settings.ldap.form.userFilter.label": "User Filter",
	"settings.ldap.form.userFilter.placeholder": "(ObjectClass=user)",
	"settings.ldap.form.userFilter.infoText": "LDAP query to use when searching for user. Only users returned by this filter will be allowed to sign-in in n8n",
	"settings.ldap.form.attributeMappingInfo.label": "Attribute mapping",
	"settings.ldap.form.ldapId.label": "ID",
	"settings.ldap.form.ldapId.placeholder": "uid",
	"settings.ldap.form.ldapId.infoText": "The attribute in the LDAP server used as a unique identifier in n8n. It should be an unique LDAP attribute like uid",
	"settings.ldap.form.loginId.label": "Login ID",
	"settings.ldap.form.loginId.placeholder": "mail",
	"settings.ldap.form.loginId.infoText": "The attribute in the LDAP server used to log-in in n8n",
	"settings.ldap.form.email.label": "Email",
	"settings.ldap.form.email.placeholder": "mail",
	"settings.ldap.form.email.infoText": "The attribute in the LDAP server used to populate the email in n8n",
	"settings.ldap.form.firstName.label": "First Name",
	"settings.ldap.form.firstName.placeholder": "givenName",
	"settings.ldap.form.firstName.infoText": "The attribute in the LDAP server used to populate the first name in n8n",
	"settings.ldap.form.lastName.label": "Last Name",
	"settings.ldap.form.lastName.placeholder": "sn",
	"settings.ldap.form.lastName.infoText": "The attribute in the LDAP server used to populate the last name in n8n",
	"settings.ldap.form.synchronizationEnabled.label": "Enable periodic LDAP synchronization",
	"settings.ldap.form.synchronizationEnabled.tooltip": "Enable users to be synchronized periodically",
	"settings.ldap.form.synchronizationInterval.label": "Synchronization Interval (Minutes)",
	"settings.ldap.form.synchronizationInterval.infoText": "How often the synchronization should run",
	"settings.ldap.form.pageSize.label": "Page Size",
	"settings.ldap.form.pageSize.infoText": "Max number of records to return per page during synchronization. 0 for unlimited",
	"settings.ldap.form.searchTimeout.label": "Search Timeout (Seconds)",
	"settings.ldap.form.searchTimeout.infoText": "The timeout value for queries to the AD/LDAP server. Increase if you are getting timeout errors caused by a slow AD/LDAP server",
	"settings.ldap.section.synchronization.title": "Synchronization",
	"settings.sso": "SSO",
	"settings.sso.title": "Single Sign On",
	"settings.sso.subtitle": "SAML 2.0 Configuration",
	"settings.sso.info": "Activate SAML or OIDC to enable passwordless login via your existing user management tool and enhance security through unified authentication.",
	"settings.sso.info.link": "Learn how to configure SAML or OIDC.",
	"settings.sso.activation.tooltip": "You need to save the settings first before activating SAML",
	"settings.sso.activated": "Activated",
	"settings.sso.deactivated": "Deactivated",
	"settings.sso.settings.redirectUrl.label": "Redirect URL",
	"settings.sso.settings.redirectUrl.copied": "Redirect URL copied to clipboard",
	"settings.sso.settings.redirectUrl.help": "Copy the Redirect URL to configure your SAML provider",
	"settings.sso.settings.entityId.label": "Entity ID",
	"settings.sso.settings.entityId.copied": "Entity ID copied to clipboard",
	"settings.sso.settings.entityId.help": "Copy the Entity ID URL to configure your SAML provider",
	"settings.sso.settings.ips.label": "Identity Provider Settings",
	"settings.sso.settings.ips.xml.help": "Paste here the raw Metadata XML provided by your Identity Provider",
	"settings.sso.settings.ips.url.help": "Paste here the Identity Provider Metadata URL",
	"settings.sso.settings.ips.url.placeholder": "e.g. https://samltest.id/saml/idp",
	"settings.sso.settings.ips.url.invalid": "The Identity Provider Metadata URL is not valid",
	"settings.sso.settings.ips.options.url": "Metadata URL",
	"settings.sso.settings.ips.options.xml": "XML",
	"settings.sso.settings.oidc.prompt.none": "None (Silent authentication)",
	"settings.sso.settings.oidc.prompt.login": "Login (Force the user to log in)",
	"settings.sso.settings.oidc.prompt.consent": "Consent (Ask the user to consent)",
	"settings.sso.settings.oidc.prompt.select_account": "Select Account (Allow the user to select an account)",
	"settings.sso.settings.oidc.prompt.create": "Create (Ask the OP to show the registration page first)",
	"settings.sso.settings.test": "Test settings",
	"settings.sso.settings.save": "Save settings",
	"settings.sso.settings.save.activate.title": "Test and activate SAML SSO",
	"settings.sso.settings.save.activate.message": "SAML SSO configuration saved successfully. Test your SAML SSO settings first, then activate to enable single sign-on for your organization.",
	"settings.sso.settings.save.activate.cancel": "Cancel",
	"settings.sso.settings.save.activate.test": "Test settings",
	"settings.sso.settings.save.error": "Error saving SAML SSO configuration",
	"settings.sso.settings.save.error_oidc": "Error saving OIDC SSO configuration",
	"settings.sso.settings.footer.hint": "Don't forget to activate SAML SSO once you've saved the settings.",
	"settings.sso.actionBox.title": "Available on the Enterprise plan",
	"settings.sso.actionBox.description": "Use Single Sign On to consolidate authentication into a single platform to improve security and agility.",
	"settings.sso.actionBox.buttonText": "See plans",
	"settings.oidc.confirmMessage.beforeSaveForm.headline": "Are you sure you want to disable OIDC login?",
	"settings.oidc.confirmMessage.beforeSaveForm.message": "If you do so, all OIDC users will be converted to email users.",
	"settings.mfa.secret": "Secret {secret}",
	"settings.mfa": "MFA",
	"settings.mfa.title": "Multi-factor Authentication",
	"settings.mfa.updateConfiguration": "MFA configuration updated",
	"settings.mfa.invalidAuthenticatorCode": "Invalid authenticator code",
	"projects.header.overview.subtitle": "All the workflows, credentials and executions you have access to",
	"projects.header.overview.subtitleWithDataTables": "All the workflows, credentials and data tables you have access to",
	"projects.header.shared.title": "Shared with you",
	"projects.header.personal.subtitle": "Workflows and credentials owned by you",
	"projects.header.personal.subtitleWithDataTables": "Workflows, credentials and data tables owned by you",
	"projects.header.shared.subtitle": "Workflows and credentials other users have shared with you",
	"projects.header.create.workflow": "Create Workflow",
	"projects.header.create.credential": "Create Credential",
	"projects.header.create.folder": "Create Folder",
	"projects.create": "Create",
	"projects.create.personal": "Create in personal",
	"projects.create.team": "Create in project",
	"projects.menu.overview": "Overview",
	"projects.menu.shared": "Shared with you",
	"projects.menu.title": "Projects",
	"projects.menu.personal": "Personal",
	"projects.menu.addFirstProject": "Add project",
	"projects.settings": "Project settings",
	"projects.settings.info": "Project info",
	"projects.settings.newProjectName": "My project",
	"projects.settings.iconPicker.button.tooltip": "Choose project icon",
	"projects.settings.name": "Icon and name",
	"projects.settings.description": "Description",
	"projects.settings.projectMembers": "Project members",
	"projects.settings.danger.message": "When deleting a project, you can also choose to move all workflows and credentials to another project.",
	"projects.settings.danger.title": "Danger zone",
	"projects.settings.danger.deleteProject": "Delete this project",
	"projects.settings.button.save": "@:_reusableBaseText.save",
	"projects.settings.button.cancel": "@:_reusableBaseText.cancel",
	"projects.settings.button.deleteProject": "Delete project",
	"projects.settings.role.admin": "@:_reusableBaseText.roles.admin",
	"projects.settings.role.editor": "@:_reusableBaseText.roles.editor",
	"projects.settings.role.viewer": "@:_reusableBaseText.roles.viewer",
	"projects.settings.delete.title": "Delete \"{projectName}\" Project?",
	"projects.settings.delete.message": "What should we do with the project data?",
	"projects.settings.delete.message.empty": "There are no workflows, credentials or data tables in this project.",
	"projects.settings.delete.question.transfer.label": "Transfer its workflows, credentials and data tables to another project or user",
	"projects.settings.delete.question.transfer.title": "Project or user to transfer to",
	"projects.settings.delete.question.wipe.label": "Delete its workflows, credentials and data tables",
	"projects.settings.delete.question.wipe.title": "Type \"delete all data\" to confirm",
	"projects.settings.delete.question.wipe.placeholder": "delete all data",
	"projects.settings.delete.confirm": "Yes, I am sure",
	"projects.settings.delete.cancel": "No, cancel",
	"projects.settings.delete.successful.title": "Project {projectName} deleted",
	"projects.settings.delete.error.title": "An error occurred while deleting the project",
	"projects.settings.save.successful.title": "Project {projectName} saved successfully",
	"projects.settings.icon.update.successful.title": "Project icon updated successfully",
	"projects.settings.save.error.title": "An error occurred while saving the project",
	"projects.settings.role.upgrade.title": "Upgrade to unlock additional roles",
	"projects.settings.role.upgrade.message": "You're currently limited to {limit} on the {planName} plan and can only assign the admin role to users within this project. To create more projects and unlock additional roles, upgrade your plan.",
	"projects.settings.role.upgrade.tooltip": "Upgrade to Pro or Enterprise to assign Editor and Viewer roles",
	"projects.settings.table.header.user": "@:_reusableBaseText.user",
	"projects.settings.table.header.role": "@:_reusableBaseText.role",
	"projects.settings.table.row.removeUser": "Remove user",
	"projects.settings.role.admin.description": "Can edit workflows, credentials, and project settings",
	"projects.settings.role.editor.description": "Can edit workflows and credentials",
	"projects.settings.role.viewer.description": "Can view workflows and executions",
	"projects.settings.role.personalOwner": "Owner",
	"projects.settings.members.search.placeholder": "Search members...",
	"projects.settings.memberRole.updated.title": "Member role updated successfully",
	"projects.settings.memberRole.update.error.title": "An error occurred while updating member role",
	"projects.settings.member.removed.title": "Member removed successfully",
	"projects.settings.member.remove.error.title": "An error occurred while removing member",
	"projects.settings.member.added.title": "Member added successfully",
	"projects.sharing.noMatchingProjects": "There are no available projects",
	"projects.sharing.noMatchingUsers": "No matching users or projects",
	"projects.sharing.select.placeholder": "Select project or user",
	"projects.sharing.select.placeholder.user": "Share with user(s)",
	"projects.sharing.select.placeholder.project": "Share with projects or users",
	"projects.error.title": "Project error",
	"projects.create.limit": "{count} project | {count} projects",
	"projects.create.limitReached": "You have reached the {planName} plan limit of {limit}. Upgrade your plan to unlock more projects. {link}",
	"projects.create.limitReached.cloud": "You have reached the {planName} plan limit of {limit}. Upgrade your plan to unlock more projects.",
	"projects.create.limitReached.self": "Upgrade to unlock projects for more granular control over sharing, access and organisation of workflows",
	"projects.create.limitReached.link": "View plans",
	"projects.create.permissionDenied": "Your current role does not allow you to create projects",
	"projects.move.resource.modal.title": "Choose a project or user to move this {resourceTypeLabel} to",
	"projects.move.resource.modal.message": "\"{resourceName}\" is currently {inPersonalProject}{inTeamProject}",
	"projects.move.resource.modal.message.team": "in the \"{resourceHomeProjectName}\" project.",
	"projects.move.resource.modal.message.personal": "owned by \"{resourceHomeProjectName}\".",
	"projects.move.resource.modal.message.note": "Note",
	"projects.move.resource.modal.message.sharingNote": "{note}: Moving will remove any existing sharing for this {resourceTypeLabel}.",
	"projects.move.resource.modal.message.sharingInfo": "(Currently shared with {count} project) | (Currently shared with {count} projects)",
	"projects.move.resource.modal.message.usedCredentials": "Also share the {usedCredentials} used by this workflow to ensure it will continue to run correctly",
	"projects.move.resource.modal.message.usedCredentials.number": "{count} credential | {count} credentials",
	"projects.move.resource.modal.message.unAccessibleCredentials": "Some credentials",
	"projects.move.resource.modal.message.unAccessibleCredentials.note": "{credentials} used in this workflow will not be shared",
	"projects.move.resource.modal.message.noProjects": "Currently there are not any projects or users available for you to move this {resourceTypeLabel} to.",
	"projects.move.resource.modal.button": "Move {resourceTypeLabel}",
	"projects.move.resource.modal.selectPlaceholder": "Select project or user...",
	"projects.move.resource.error.title": "Error moving {resourceName} {resourceTypeLabel}",
	"projects.move.resource.success.title": "{resourceTypeLabel} '{resourceName}' is moved to '{targetProjectName}'",
	"projects.move.resource.success.message.workflow": "The workflow's credentials were not shared with the project.",
	"projects.move.resource.success.message.workflow.withAllCredentials": "The workflow's credentials were shared with the project.",
	"projects.move.resource.success.message.workflow.withSomeCredentials": "Due to missing permissions not all the workflow's credentials were shared with the project.",
	"projects.move.resource.success.link": "View {targetProjectName}",
	"projects.badge.tooltip.sharedOwned": "This {resourceTypeLabel} is owned by you and shared with {count} users",
	"projects.badge.tooltip.sharedPersonal": "This {resourceTypeLabel} is owned by {name} and shared with {count} users",
	"projects.badge.tooltip.personal": "This {resourceTypeLabel} is owned by {name}",
	"projects.badge.tooltip.team": "This {resourceTypeLabel} is owned and accessible by the {name} project.",
	"projects.badge.tooltip.sharedTeam": "This {resourceTypeLabel} is owned by the {name} project and accessible by {count} users",
	"mfa.setup.invalidAuthenticatorCode": "{code} is not a valid number",
	"mfa.setup.invalidCode": "Two-factor code failed. Please try again.",
	"mfa.code.modal.title": "Two-factor authentication",
	"mfa.recovery.modal.title": "Two-factor recovery",
	"mfa.code.input.info": "Don't have your auth device?",
	"mfa.code.input.info.action": "Enter a recovery code",
	"mfa.recovery.input.info.action": "enter a recovery code",
	"mfa.code.button.continue": "Continue",
	"mfa.recovery.button.verify": "Verify",
	"mfa.button.back": "Back",
	"mfa.code.input.label": "Two-factor code",
	"mfa.code.input.placeholder": "e.g. 123456",
	"mfa.code.recovery.input.label": "Two-factor code or recovery code",
	"mfa.code.recovery.input.placeholder": "e.g. 123456 or c79f9c02-7b2e-44...",
	"mfa.recovery.input.label": "Recovery code",
	"mfa.recovery.input.placeholder": "e.g c79f9c02-7b2e-44...",
	"mfa.code.invalid": "This code is invalid, try again or",
	"mfa.recovery.invalid": "This code is invalid or was already used, try again",
	"mfa.setup.step1.title": "Setup Authenticator app [1/2]",
	"mfa.setup.step2.title": "Download your recovery codes [2/2]",
	"mfa.setup.step1.instruction1.title": "1. Scan the QR code",
	"mfa.setup.step1.instruction1.subtitle": "{part1} {part2}",
	"mfa.setup.step1.instruction1.subtitle.part1": "Use an authenticator app from your phone to scan. If you can't scan the QR code, enter",
	"mfa.setup.step1.instruction1.subtitle.part2": "this text code",
	"mfa.setup.step1.instruction2.title": "2. Enter the code from the app",
	"mfa.setup.step2.description": "You can use recovery codes as a second factor to authenticate in case you lose access to your device.",
	"mfa.setup.step2.infobox.description": "{part1} {part2}",
	"mfa.setup.step2.infobox.description.part1": "Keep your recovery codes somewhere safe. If you lose your device and your recovery codes, you will",
	"mfa.setup.step2.infobox.description.part2": "lose access to your account.",
	"mfa.setup.step2.button.download": "Download recovery codes",
	"mfa.setup.step2.button.save": "I have downloaded my recovery codes",
	"mfa.setup.step1.button.continue": "Continue",
	"mfa.setup.step1.input.label": "Code from your authenticator app",
	"mfa.setup.step1.toast.copyToClipboard.title": "Code copied to clipboard",
	"mfa.setup.step1.toast.copyToClipboard.message": "Enter the code in your authenticator app",
	"mfa.setup.step2.toast.setupFinished.message": "Two-factor authentication enabled",
	"mfa.setup.step2.toast.setupFinished.error.message": "Error enabling two-factor authentication",
	"mfa.setup.step2.toast.tokenExpired.error.message": "MFA token expired. Close the modal and enable MFA again",
	"mfa.prompt.code.modal.title": "Two-factor code or recovery code required",
	"settings.personal.mfa.section.title": "Two-factor authentication (2FA)",
	"settings.personal.personalisation": "Personalisation",
	"settings.personal.theme": "Theme",
	"settings.personal.theme.systemDefault": "System default",
	"settings.personal.theme.light": "Light theme",
	"settings.personal.theme.dark": "Dark theme",
	"settings.personal.mfa.button.disabled.infobox": "Two-factor authentication is currently disabled.",
	"settings.personal.mfa.button.enabled.infobox": "Two-factor authentication is currently enabled.",
	"settings.personal.mfa.button.enabled": "Enable 2FA",
	"settings.personal.mfa.button.disabled": "Disable two-factor authentication",
	"settings.personal.mfa.toast.disabledMfa.title": "Two-factor authentication disabled",
	"settings.personal.mfa.toast.disabledMfa.message": "You will no longer need your authenticator app when signing in",
	"settings.personal.mfa.toast.disabledMfa.error.message": "Error disabling two-factor authentication",
	"settings.personal.mfa.toast.canEnableMfa.title": "MFA pre-requisite failed",
	"settings.personal.mfa.enforced": "The settings on this instance <strong>require you to set up 2FA</strong>. Please enable it to continue working in this instance.",
	"settings.personal.mfa.enforce.message": "Enforces 2FA for all users on this instance authenticating with email and password logins.",
	"settings.personal.mfa.enforce.unlicensed_tooltip": "You can enforce 2FA for all users on this instance authenticating with email and password logins when you upgrade your plan. {action}",
	"settings.personal.mfa.enforce.unlicensed_tooltip.link": "View plans",
	"settings.personal.mfa.enforce.title": "Enforce two-factor authentication",
	"settings.personal.mfa.enforce.error": "Cannot enforce 2FA for all users",
	"settings.personal.mfa.enforce.enabled.title": "2FA Enforced",
	"settings.personal.mfa.enforce.enabled.message": "Two-factor authentication is now required for all users on this instance authenticating with email and password logins.",
	"settings.personal.mfa.enforce.disabled.title": "2FA No Longer Enforced",
	"settings.personal.mfa.enforce.disabled.message": "Two-factor authentication is no longer mandatory for users on this instance authenticating with email and password logins.",
	"settings.mfa.toast.noRecoveryCodeLeft.title": "No 2FA recovery codes remaining",
	"settings.mfa.toast.noRecoveryCodeLeft.message": "You have used all of your recovery codes. Disable then re-enable two-factor authentication to generate new codes. <a href='/settings/personal' target='_blank' >Open settings</a>",
	"sso.login.divider": "or",
	"sso.login.button": "Continue with SSO",
	"executionUsage.currentUsage": "{text} {count}",
	"executionUsage.currentUsage.text": "You are in a free trial with limited executions. You have",
	"executionUsage.currentUsage.count": "{n} day left. | {n} days left.",
	"executionUsage.label.executions": "Executions",
	"executionUsage.button.upgrade": "Upgrade plan",
	"executionUsage.expired.text": "Your trial is over. Upgrade now to keep your data.",
	"executionUsage.ranOutOfExecutions.text": "You’re out of executions. Upgrade your plan to keep automating.",
	"openExecution.missingExeuctionId.title": "Could not find execution",
	"openExecution.missingExeuctionId.message": "Make sure this workflow saves executions via the settings",
	"type.string": "String",
	"type.number": "Number",
	"type.dateTime": "Date & Time",
	"type.boolean": "Boolean",
	"type.array": "Array",
	"type.object": "Object",
	"type.binary": "Binary Data",
	"filter.operator.equals": "is equal to",
	"filter.operator.notEquals": "is not equal to",
	"filter.operator.contains": "contains",
	"filter.operator.notContains": "does not contain",
	"filter.operator.startsWith": "starts with",
	"filter.operator.notStartsWith": "does not start with",
	"filter.operator.endsWith": "ends with",
	"filter.operator.notEndsWith": "does not end with",
	"filter.operator.exists": "exists",
	"filter.operator.notExists": "does not exist",
	"filter.operator.regex": "matches regex",
	"filter.operator.notRegex": "does not match regex",
	"filter.operator.gt": "is greater than",
	"filter.operator.lt": "is less than",
	"filter.operator.gte": "is greater than or equal to",
	"filter.operator.lte": "is less than or equal to",
	"filter.operator.after": "is after",
	"filter.operator.before": "is before",
	"filter.operator.afterOrEquals": "is after or equal to",
	"filter.operator.beforeOrEquals": "is before or equal to",
	"filter.operator.true": "is true",
	"filter.operator.false": "is false",
	"filter.operator.lengthEquals": "length equal to",
	"filter.operator.lengthNotEquals": "length not equal to",
	"filter.operator.lengthGt": "length greater than",
	"filter.operator.lengthLt": "length less than",
	"filter.operator.lengthGte": "length greater than or equal to",
	"filter.operator.lengthLte": "length less than or equal to",
	"filter.operator.empty": "is empty",
	"filter.operator.notEmpty": "is not empty",
	"filter.combinator.or": "OR",
	"filter.combinator.and": "AND",
	"filter.addCondition": "Add condition",
	"filter.removeCondition": "Remove condition",
	"filter.dragCondition": "Drag condition",
	"filter.maxConditions": "Maximum conditions reached",
	"filter.condition.resolvedTrue": "This condition is true for the first input item",
	"filter.condition.resolvedFalse": "This condition is false for the first input item",
	"filter.condition.placeholderLeft": "value1",
	"filter.condition.placeholderRight": "value2",
	"assignment.dragFields": "Drag input fields here",
	"assignment.dropField": "Drop here to add the field",
	"assignment.or": "or",
	"assignment.add": "Add Field",
	"assignment.addAll": "Add All",
	"assignment.clearAll": "Clear All",
	"assignment.binaryData.placeholder": "Name of binary input (or expression referencing it)",
	"templateSetup.title": "Set up '{name}' template",
	"templateSetup.instructions": "You need {0} account to setup this template",
	"templateSetup.skip": "Skip",
	"templateSetup.continue.button": "Continue",
	"templateSetup.credential.description": "The credential you select will be used in the {0} node of the workflow template. | The credential you select will be used in the {0} nodes of the workflow template.",
	"templateSetup.continue.button.fillRemaining": "Fill remaining credentials to continue",
	"setupCredentialsModal.title": "Set up template",
	"becomeCreator.text": "Share your workflows with 40k+ users, unlock perks, and shine as a featured template creator!",
	"becomeCreator.buttonText": "Become a creator",
	"becomeCreator.closeButtonTitle": "Close",
	"feedback.title": "Was this helpful?",
	"feedback.positive": "I found this helpful",
	"feedback.negative": "I didn't find this helpful",
	"communityPlusModal.badge": "Time limited offer",
	"communityPlusModal.title": "Get paid features for free (forever)",
	"communityPlusModal.error.title": "License request failed",
	"communityPlusModal.success.title": "Request sent",
	"communityPlusModal.success.message": "License key will be sent to {email}",
	"communityPlusModal.description": "Receive a free activation key for the advanced features below - lifetime access.",
	"communityPlusModal.features.first.title": "Workflow history",
	"communityPlusModal.features.first.description": "Review and restore any workflow version from the last 24 hours",
	"communityPlusModal.features.second.title": "Advanced debugging",
	"communityPlusModal.features.second.description": "Easily fix any workflow execution that’s errored, then re-run it",
	"communityPlusModal.features.third.title": "Execution search and tagging",
	"communityPlusModal.features.third.description": "Search and organize past workflow executions for easier review",
	"communityPlusModal.features.fourth.title": "Folders",
	"communityPlusModal.features.fourth.description": "Organize your workflows in a nested folder structure",
	"communityPlusModal.input.email.label": "Enter email to receive your license key",
	"communityPlusModal.button.skip": "Skip",
	"communityPlusModal.button.confirm": "Send me a free license key",
	"communityPlusModal.notice": "Included features may change, but once unlocked, you'll keep them forever.",
	"executeWorkflowTrigger.createNewSubworkflow": "Create a Sub-Workflow in {projectName}",
	"executeWorkflowTrigger.createNewSubworkflow.noProject": "Create a New Sub-Workflow",
	"evaluation.listRuns.status.new": "New",
	"evaluation.listRuns.status.running": "Running",
	"evaluation.listRuns.status.evaluating": "Evaluating",
	"evaluation.listRuns.status.completed": "Completed",
	"evaluation.listRuns.status.cancelled": "Cancelled",
	"evaluation.listRuns.status.error": "Error",
	"evaluation.listRuns.status.success": "Success",
	"evaluation.listRuns.status.warning": "Warning",
	"evaluation.listRuns.metricsOverTime": "Metrics over time",
	"evaluation.listRuns.status": "Status",
	"evaluation.listRuns.runListHeader": "All runs",
	"evaluation.listRuns.allTestCases": "All test cases | All test cases ({count})",
	"evaluation.listRuns.testCasesListHeader": "Run #{index}",
	"evaluation.listRuns.runNumber": "Run",
	"evaluation.listRuns.runDate": "Run date",
	"evaluation.listRuns.runStatus": "Run status",
	"evaluation.listRuns.noRuns": "No test runs",
	"evaluation.listRuns.pastRuns.total": "No runs | All runs | All runs",
	"evaluation.listRuns.noRuns.description": "Run a test to see the results here",
	"evaluation.listRuns.deleteRuns": "No runs to delete | Delete {count} run | Delete {count} runs",
	"evaluation.listRuns.noRuns.button": "Run Test",
	"evaluation.listRuns.toast.error.fetchTestCases": "Failed to load run details",
	"evaluation.listRuns.error.testCasesNotFound": "No matching rows in dataset{description}",
	"evaluation.listRuns.error.testCasesNotFound.description": "Check any filters or limits set in the evaluation trigger",
	"evaluation.listRuns.error.executionInterrupted": "Test run was interrupted",
	"evaluation.listRuns.error.unknownError": "Execution error{description}",
	"evaluation.listRuns.error.cantFetchTestRuns": "Couldn’t fetch test runs",
	"evaluation.listRuns.error.cantStartTestRun": "Couldn’t start test run",
	"evaluation.listRuns.error.cantStopTestRun": "Couldn’t stop test run",
	"evaluation.listRuns.error.unknownError.description": "Click for more details",
	"evaluation.listRuns.error.evaluationTriggerNotFound": "Evaluation trigger missing",
	"evaluation.listRuns.error.evaluationTriggerNotConfigured": "Evaluation trigger is not configured",
	"evaluation.listRuns.error.evaluationTriggerDisabled": "Evaluation trigger is disabled",
	"evaluation.listRuns.error.setOutputsNodeNotConfigured": "'Set outputs' node is not configured",
	"evaluation.listRuns.error.setMetricsNodeNotFound": "No 'Set metrics' node in workflow",
	"evaluation.listRuns.error.setMetricsNodeNotConfigured": "'Set metrics' node is not configured",
	"evaluation.listRuns.error.cantFetchTestCases": "Couldn’t fetch test cases{description}",
	"evaluation.listRuns.error.cantFetchTestCases.description": "Check the Google Sheet setup in the evaluation trigger",
	"evaluation.runDetail.ranAt": "Ran at",
	"evaluation.runDetail.testCase": "Test case",
	"evaluation.runDetail.testCase.id": "Test case ID",
	"evaluation.runDetail.testCase.status": "Test case status",
	"evaluation.runDetail.totalCases": "Total cases",
	"evaluation.runDetail.error.mockedNodeMissing": "Output for a mocked node does not exist in benchmark execution.{link}.",
	"evaluation.runDetail.error.mockedNodeMissing.solution": "Fix test configuration",
	"evaluation.runDetail.error.executionFailed": "Failed to execute workflow",
	"evaluation.runDetail.error.executionFailed.solution": "View execution",
	"evaluation.runDetail.error.datasetTriggerNotFound": "Dataset trigger does not exist in the workflow.{link}.",
	"evaluation.runDetail.error.datasetTriggerNotFound.solution": "View workflow",
	"evaluation.runDetail.error.invalidMetrics": "Evaluation metrics node returned invalid metrics. Only numeric values are expected. View workflow. {link}.",
	"evaluation.runDetail.error.invalidMetrics.solution": "View workflow",
	"evaluation.runDetail.error.unknownError": "An unknown error occurred",
	"evaluation.runDetail.error.unknownError.solution": "View execution",
	"evaluation.runDetail.error.noMetricsCollected": "No 'Set metrics' node executed",
	"evaluation.runDetail.error.partialCasesFailed": "Finished with errors",
	"evaluation.runDetail.notice.useSetInputs": "Tip: Show input columns from your dataset here by adding the evaluation node's 'set inputs' operation to your workflow",
	"evaluation.runTest": "Run Test",
	"evaluation.stopTest": "Stop Test",
	"evaluation.cancelTestRun": "Cancel Test Run",
	"evaluation.notImplemented": "This feature is not implemented yet!",
	"evaluation.viewDetails": "View Details",
	"evaluation.editTest": "Edit Test",
	"evaluation.deleteTest": "Delete Test",
	"evaluation.deleteTest.warning": "The test and all associated runs will be removed. This cannot be undone",
	"evaluation.testIsRunning": "Test is running. Please wait for it to finish.",
	"evaluation.completeConfig": "Complete the configuration below to run the test:",
	"evaluation.configError.noEvaluationTag": "No evaluation tag set",
	"evaluation.configError.noExecutionsAddedToTag": "No executions added to this tag",
	"evaluation.configError.noEvaluationWorkflow": "No evaluation workflow set",
	"evaluation.configError.noMetrics": "No metrics set",
	"evaluation.workflowInput.subworkflowName": "Evaluation workflow for {name}",
	"evaluation.workflowInput.subworkflowName.default": "My Evaluation Sub-Workflow",
	"evaluation.executions.addTo": "Add to Test",
	"evaluation.executions.addTo.new": "Add to Test",
	"evaluation.executions.addTo.existing": "Add to \"{name}\"",
	"evaluation.executions.addedTo": "Added to \"{name}\"",
	"evaluation.executions.removeFrom": "Remove from \"{name}\"",
	"evaluation.executions.removedFrom": "Execution removed from \"{name}\"",
	"evaluation.executions.toast.addedTo": "Go back to \"{name}\"",
	"evaluation.executions.tooltip.addTo": "Add to new test",
	"evaluation.executions.tooltip.noExecutions": "Evaluation executions can not be added to tests",
	"evaluation.executions.tooltip.onlySuccess": "Only successful executions can be added to tests",
	"evaluation.workflow.createNew": "Create new evaluation workflow",
	"evaluation.workflow.createNew.or": "or use existing evaluation sub-workflow",
	"evaluation.executions.toast.addedTo.title": "Execution added to test ",
	"evaluation.executions.toast.closeTab": "Close this tab",
	"evaluation.executions.toast.removedFrom.title": "Execution removed from test ",
	"evaluations.readOnlyNotice": "Evaluations can't be built in read-only mode. Build your evaluation on your development environment.",
	"evaluations.paywall.title": "Register to enable evaluation",
	"evaluations.paywall.description": "Register your Community instance to unlock the evaluation feature",
	"evaluations.paywall.cta": "Register instance",
	"evaluations.setupWizard.title": "Test your AI workflow over multiple inputs",
	"evaluations.setupWizard.description": "Evaluations measure performance against a test dataset.",
	"evaluations.setupWizard.moreInfo": "More info",
	"evaluations.setupWizard.stepHeader.optional": "Optional",
	"evaluations.setupWizard.step1.title": "Wire up a test dataset",
	"evaluations.setupWizard.step1.item1": "Create a Data table or Google Sheet with one input per row",
	"evaluations.setupWizard.step1.item2": "Add an evaluation trigger to your workflow and wire it up",
	"evaluations.setupWizard.step1.button": "Add evaluation trigger",
	"evaluations.setupWizard.step2.title": "Write workflow outputs back to dataset",
	"evaluations.setupWizard.step2.item1": "Add a 'Set Outputs' operation to log each output back to your table",
	"evaluations.setupWizard.step2.button": "Add 'set outputs' node",
	"evaluations.setupWizard.step3.title": "Set up a quality score",
	"evaluations.setupWizard.step3.item1": "Calculate a score, e.g. by comparing expected and actual outputs",
	"evaluations.setupWizard.step3.item2": "Add a 'set metrics' operation to log the score",
	"evaluations.setupWizard.step3.button": "Add 'Set metrics' node",
	"evaluations.setupWizard.step3.skip": "Skip",
	"evaluations.setupWizard.step3.notice": "Your plan supports custom metrics for one workflow only. {link}",
	"evaluations.setupWizard.step3.notice.link": "See plans",
	"evaluations.setupWizard.step4.title": "Run evaluation",
	"evaluations.setupWizard.step4.button": "Run evaluation",
	"evaluations.setupWizard.step4.altButton": "Run in editor",
	"evaluations.setupWizard.limitReached": "Limit reached. Your plan includes custom metrics for one workflow only. Upgrade for unlimited use or delete the workflow with existing evaluation runs.",
	"freeAi.credits.callout.claim.title": "Get {credits} free OpenAI API credits",
	"freeAi.credits.callout.claim.button.label": "Claim credits",
	"freeAi.credits.callout.success.title.part1": "Claimed {credits} free OpenAI API credits! Please note these free credits are only for the following models:",
	"freeAi.credits.callout.success.title.part2": "gpt-4o-mini, text-embedding-3-small, dall-e-3, tts-1, whisper-1, and text-moderation-latest",
	"freeAi.credits.credentials.edit": "This is a managed credential and cannot be edited.",
	"freeAi.credits.showError.claim.title": "Free AI credits",
	"freeAi.credits.showError.claim.message": "Enable to claim credits",
	"freeAi.credits.showWarning.workflow.activation.title": "You're using free OpenAI API credits",
	"freeAi.credits.showWarning.workflow.activation.description": "To make sure your workflow runs smoothly in the future, replace the free OpenAI API credits with your own API key.",
	"insights.heading": "Insights",
	"insights.lastNDays": "Last {count} days",
	"insights.lastNHours": "Last {count} hours",
	"insights.months": "{count} months",
	"insights.oneYear": "One year",
	"insights.banner.timeSaved.tooltip": "No estimate available yet. To see potential time savings, {link} to each workflow from workflow settings.",
	"insights.banner.timeSaved.tooltip.link.text": "add time estimates",
	"insights.banner.noData.tooltip": "Manual executions aren’t counted. Data may take up to 24 hours to update after upgrading. {link}",
	"insights.banner.noData.tooltip.link": "Learn more",
	"insights.banner.noData.tooltip.link.url": "https://docs.n8n.io/insights/",
	"insights.banner.title.total": "Prod. executions",
	"insights.banner.title.failed": "Failed prod. executions",
	"insights.banner.title.failureRate": "Failure rate",
	"insights.banner.title.timeSaved": "Time saved",
	"insights.banner.title.timeSavedDailyAverage": "Time saved daily avg.",
	"insights.banner.title.averageRunTime": "Run time (avg.)",
	"insights.dashboard.table.projectName": "Project name",
	"insights.dashboard.table.title": "Breakdown by workflow",
	"insights.dashboard.table.estimate": "Estimate",
	"insights.dashboard.title": "Insights",
	"insights.dashboard.search.placeholder": "All projects",
	"insights.dashboard.paywall.title": "Upgrade to access more detailed insights",
	"insights.dashboard.paywall.description": "Gain access to more granular, per-workflow insights and visual breakdown of production executions over different time periods.",
	"insights.banner.title.timeSaved.tooltip": "Total time saved calculated from your estimated time savings per execution across all workflows",
	"insights.banner.failureRate.deviation.tooltip": "Percentage point change from previous period",
	"insights.chart.failed": "Failed",
	"insights.chart.succeeded": "Successful",
	"insights.chart.loading": "Loading data",
	"communityNodesDocsLink.link.title": "Open community node docs",
	"communityNodesDocsLink.title": "Docs",
	"communityNodeItem.node.hint": "Install this node to start using it",
	"communityNodeItem.actions.hint": "Install this node to start using actions",
	"communityNodeItem.label": "Add to workflow",
	"communityNodeDetails.installed": "Installed",
	"communityNodeDetails.install": "Install node",
	"communityNodeInfo.approved": "This community node has been reviewed and approved by n8n",
	"communityNodeInfo.officialApproved": "This node has been reviewed and approved by n8n",
	"communityNodeInfo.approved.label": "Verified",
	"communityNodeInfo.unverified": "This community node was added via npm and has not been verified by n8n",
	"communityNodeInfo.unverified.label": "Via npm",
	"communityNodeInfo.downloads": "{downloads} Downloads",
	"communityNodeInfo.publishedBy": "Published by {publisherName}",
	"communityNodeInfo.contact.admin": "Please contact an administrator to install this community node:",
	"communityNodeUpdateInfo.available": "A new node package version is available",
	"insights.upgradeModal.button.dismiss": "Dismiss",
	"insights.upgradeModal.content": "Viewing this time period requires an enterprise plan. Upgrade to Enterprise to unlock advanced features.",
	"insights.upgradeModal.perks.0": "View up to one year of insights history",
	"insights.upgradeModal.perks.1": "Zoom into last 24 hours with hourly granularity",
	"insights.upgradeModal.perks.2": "Gain deeper visibility into workflow trends over time",
	"insights.upgradeModal.title": "Upgrade to Enterprise",
	"whatsNew.versionsBehind": "{count} version behind | {count} versions behind",
	"whatsNew.update": "Update",
	"whatsNew.updateNudgeTooltip": "Only owners can perform updates",
	"whatsNew.updateAvailable": "You're currently on version {currentVersion}. Update to {latestVersion} to get {count} versions worth of new features, improvements, and fixes. See what changed",
	"whatsNew.updateAvailable.changelogLink": "in the full changelog",
	"workflowDiff.changes": "Changes",
	"workflowDiff.nodes": "Nodes",
	"workflowDiff.connectors": "Connectors",
	"workflowDiff.compare": "Compare versions",
	"workflowDiff.settings": "Settings",
	"workflowDiff.local": "Local",
	"workflowDiff.remote": "Remote ({branchName})",
	"workflowDiff.noChanges": "No changes",
	"workflowDiff.deletedWorkflow": "Missing workflow",
	"workflowDiff.deletedWorkflow.database": "The workflow doesn't exist in the database",
	"workflowDiff.deletedWorkflow.remote": "The workflow doesn't exist on remote",
	"workflowDiff.newWorkflow": "New workflow",
	"workflowDiff.newWorkflow.database": "The workflow will be created in the database",
	"workflowDiff.newWorkflow.remote": "The workflow will be created on remote",
	"preBuiltAgentTemplates.title": "Pre-built agents",
	"preBuiltAgentTemplates.tutorials": "Tutorial templates",
	"preBuiltAgentTemplates.viewAllLink": "View all templates",
	"commandBar.placeholder": "Type a command or search...",
	"commandBar.noResults": "No results found",
	"commandBar.sections.recent": "Recent",
	"commandBar.sections.nodes": "Nodes",
	"commandBar.sections.workflow": "Workflow",
	"commandBar.sections.workflows": "Workflows",
	"commandBar.sections.credentials": "Credentials",
	"commandBar.sections.dataTables": "Data Tables",
	"commandBar.sections.execution": "Execution",
	"commandBar.sections.executions": "Executions",
	"commandBar.sections.evaluation": "Evaluation",
	"commandBar.sections.demo": "Demo",
	"commandBar.sections.general": "Navigation",
	"commandBar.sections.templates": "Templates",
	"commandBar.templates.import": "Import template",
	"commandBar.templates.importWithPrefix": "Import template {templateName}",
	"commandBar.nodes.addNode": "Add node",
	"commandBar.nodes.addStickyNote": "Add sticky note",
	"commandBar.nodes.openNode": "Open node",
	"commandBar.nodes.openNodeWithPrefix": "Open node > {nodeName}",
	"commandBar.nodes.addNodeWithPrefix": "Add node > {nodeName}",
	"commandBar.nodes.searchPlaceholder": "Search by node name, type, etc.",
	"commandBar.nodes.keywords.insert": "insert",
	"commandBar.nodes.keywords.add": "add",
	"commandBar.nodes.keywords.create": "create",
	"commandBar.nodes.keywords.node": "node",
	"commandBar.workflow.test": "Execute workflow",
	"commandBar.workflow.save": "Save workflow",
	"commandBar.workflow.activate": "Activate workflow",
	"commandBar.workflow.deactivate": "Deactivate workflow",
	"commandBar.workflow.selectAll": "Select all",
	"commandBar.workflow.tidyUp": "Tidy up workflow",
	"commandBar.workflow.rename": "Rename workflow",
	"commandBar.workflow.duplicate": "Duplicate workflow",
	"commandBar.workflow.openSettings": "Open workflow settings",
	"commandBar.workflow.download": "Download workflow",
	"commandBar.workflow.importFromURL": "Import workflow from URL",
	"commandBar.workflow.importFromFile": "Import workflow from file",
	"commandBar.workflow.openCredential": "Open credential",
	"commandBar.workflow.openSubworkflow": "Open sub-workflow",
	"commandBar.workflow.archive": "Archive workflow",
	"commandBar.workflow.unarchive": "Unarchive workflow",
	"commandBar.workflow.delete": "Delete workflow",
	"commandBar.workflow.keywords.test": "test",
	"commandBar.workflow.keywords.execute": "execute",
	"commandBar.workflow.keywords.run": "run",
	"commandBar.workflow.keywords.workflow": "workflow",
	"commandBar.workflow.keywords.download": "download",
	"commandBar.workflow.keywords.export": "export",
	"commandBar.workflow.keywords.archive": "archive",
	"commandBar.workflow.keywords.delete": "delete",
	"commandBar.workflow.keywords.unarchive": "unarchive",
	"commandBar.workflow.keywords.restore": "restore",
	"commandBar.workflows.create": "Create workflow in {projectName}",
	"commandBar.workflows.open": "Open workflow",
	"commandBar.workflows.searchPlaceholder": "Search by workflow name or node type...",
	"commandBar.workflows.unnamed": "(unnamed workflow)",
	"commandBar.credentials.create": "Create credential in {projectName}",
	"commandBar.credentials.open": "Open credential",
	"commandBar.credentials.searchPlaceholder": "Search by credential name...",
	"commandBar.dataTables.create": "Create data table in {projectName}",
	"commandBar.dataTables.open": "Open data table",
	"commandBar.dataTables.searchPlaceholder": "Search by data table name...",
	"commandBar.executions.open": "Open executions",
	"commandBar.demo.availableEverywhere": "This is available everywhere",
	"commandBar.sections.projects": "Projects",
	"commandBar.projects.create": "Create project",
	"commandBar.projects.open": "Open project",
	"commandBar.projects.searchPlaceholder": "Search by project name...",
	"commandBar.projects.unnamed": "(unnamed project)"
};
function deriveMiddleKey(path, parameter) {
	let middleKey = parameter.name;
	if (isTopLevelCollection(path, parameter) || isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
	if (isNestedCollection(path, parameter) || isFixedCollection(path, parameter)) middleKey = insertOptionsAndValues([...normalize(path).split("."), parameter.name]).join(".");
	return middleKey;
}
const isNestedInCollectionLike = (path) => path.split(".").length >= 3;
var isTopLevelCollection = (path, parameter) => path.split(".").length === 2 && parameter.type === "collection";
var isNestedCollection = (path, parameter) => path.split(".").length > 2 && parameter.type === "collection";
var isFixedCollection = (path, parameter) => parameter.type === "fixedCollection" && path !== "parameters";
const normalize = (path) => path.replace(/\[.*?\]/g, "").replace("parameters.", "");
const insertOptionsAndValues = (pathSegments) => {
	return pathSegments.reduce((acc, cur, i) => {
		acc.push(cur);
		if (i === pathSegments.length - 1) return acc;
		acc.push(i % 2 === 0 ? "options" : "values");
		return acc;
	}, []);
};
const i18nInstance = createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en",
	messages: { en: en_default },
	warnHtmlMessage: false
});
const i18nVersion = ref(0);
var I18nClass = class {
	baseTextCache = /* @__PURE__ */ new Map();
	get i18n() {
		return i18nInstance.global;
	}
	exists(key) {
		return this.i18n.te(key);
	}
	shortNodeType(longNodeType) {
		return longNodeType.replace("n8n-nodes-base.", "");
	}
	get locale() {
		return i18nInstance.global.locale.value;
	}
	baseText(key, options) {
		i18nVersion.value;
		const cacheKey = `${i18nVersion.value}|${key}-${JSON.stringify(options)}`;
		if (this.baseTextCache.has(cacheKey)) return this.baseTextCache.get(cacheKey) ?? key;
		const interpolate = { ...options?.interpolate };
		let result;
		if (options?.adjustToNumber !== void 0) result = this.i18n.t(key, interpolate, options.adjustToNumber).toString();
		else result = this.i18n.t(key, interpolate).toString();
		this.baseTextCache.set(cacheKey, result);
		return result;
	}
	clearCache() {
		this.baseTextCache.clear();
		i18nVersion.value++;
	}
	dynamicRender({ key, fallback }) {
		return this.i18n.te(key) ? this.i18n.t(key).toString() : fallback ?? "";
	}
	displayTimer(msPassed, showMs = false) {
		if (msPassed > 0 && msPassed < 1e3 && showMs) return `${msPassed}${this.baseText("genericHelpers.millis")}`;
		const parts = [];
		const second = 1e3;
		const minute = 60 * second;
		const hour = 60 * minute;
		let remainingMs = msPassed;
		if (remainingMs >= hour) {
			parts.push(`${Math.floor(remainingMs / hour)}${this.baseText("genericHelpers.hrsShort")}`);
			remainingMs = remainingMs % hour;
		}
		if (parts.length > 0 || remainingMs >= minute) {
			parts.push(`${Math.floor(remainingMs / minute)}${this.baseText("genericHelpers.minShort")}`);
			remainingMs = remainingMs % minute;
		}
		const remainingSec = showMs ? remainingMs / second : Math.floor(remainingMs / second);
		parts.push(`${remainingSec}${this.baseText("genericHelpers.secShort")}`);
		return parts.join(" ");
	}
	headerText(arg) {
		return this.dynamicRender(arg);
	}
	credText(credentialType) {
		const credentialPrefix = `n8n-nodes-base.credentials.${credentialType}`;
		const context = this;
		return {
			inputLabelDisplayName({ name: parameterName, displayName }) {
				if (["clientId", "clientSecret"].includes(parameterName)) return context.dynamicRender({
					key: `_reusableDynamicText.oauth2.${parameterName}`,
					fallback: displayName
				});
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.displayName`,
					fallback: displayName
				});
			},
			hint({ name: parameterName, hint }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.hint`,
					fallback: hint
				});
			},
			inputLabelDescription({ name: parameterName, description }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.description`,
					fallback: description
				});
			},
			optionsOptionDisplayName({ name: parameterName }, { value: optionName, name: displayName }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.options.${optionName}.displayName`,
					fallback: displayName
				});
			},
			optionsOptionDescription({ name: parameterName }, { value: optionName, description }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.options.${optionName}.description`,
					fallback: description
				});
			},
			placeholder({ name: parameterName, placeholder }) {
				return context.dynamicRender({
					key: `${credentialPrefix}.${parameterName}.placeholder`,
					fallback: placeholder
				});
			}
		};
	}
	nodeText(activeNodeType) {
		const initialKey = `n8n-nodes-base.nodes.${activeNodeType ? this.shortNodeType(activeNodeType) : ""}.nodeView`;
		const context = this;
		return {
			inputLabelDisplayName(parameter, path) {
				const middleKey = deriveMiddleKey(path, parameter);
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.displayName`,
					fallback: parameter.displayName
				});
			},
			inputLabelDescription(parameter, path) {
				const middleKey = deriveMiddleKey(path, parameter);
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.description`,
					fallback: parameter.description
				});
			},
			hint(parameter, path) {
				const middleKey = deriveMiddleKey(path, parameter);
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.hint`,
					fallback: parameter.hint
				});
			},
			placeholder(parameter, path) {
				let middleKey = parameter.name;
				if (isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.placeholder`,
					fallback: parameter.placeholder
				});
			},
			optionsOptionDisplayName(parameter, { value: optionName, name: displayName }, path) {
				let middleKey = parameter.name;
				if (isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.options.${optionName}.displayName`,
					fallback: displayName
				});
			},
			optionsOptionDescription(parameter, { value: optionName, description }, path) {
				let middleKey = parameter.name;
				if (isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.options.${optionName}.description`,
					fallback: description
				});
			},
			collectionOptionDisplayName(parameter, { name: optionName, displayName }, path) {
				let middleKey = parameter.name;
				if (isNestedInCollectionLike(path)) middleKey = insertOptionsAndValues(normalize(path).split(".")).join(".");
				return context.dynamicRender({
					key: `${initialKey}.${middleKey}.options.${optionName}.displayName`,
					fallback: displayName
				});
			},
			multipleValueButtonText({ name: parameterName, typeOptions }) {
				return context.dynamicRender({
					key: `${initialKey}.${parameterName}.multipleValueButtonText`,
					fallback: typeOptions?.multipleValueButtonText
				});
			},
			eventTriggerDescription(nodeType, eventTriggerDescription) {
				return context.dynamicRender({
					key: `n8n-nodes-base.nodes.${nodeType}.nodeView.eventTriggerDescription`,
					fallback: eventTriggerDescription
				});
			}
		};
	}
	localizeNodeName(language, nodeName, type) {
		if (language === "en") return nodeName;
		const nodeTypeName = this.shortNodeType(type);
		return this.headerText({
			key: `headers.${nodeTypeName}.displayName`,
			fallback: nodeName
		});
	}
	autocompleteUIValues = { docLinkLabel: this.baseText("expressionEdit.learnMore") };
};
function setLanguage(locale) {
	i18nInstance.global.locale.value = locale;
	document.querySelector("html").setAttribute("lang", locale);
	i18n.clearCache();
	return locale;
}
function addNodeTranslation(nodeTranslation, language) {
	const newMessages = { "n8n-nodes-base": { nodes: nodeTranslation } };
	i18nInstance.global.mergeLocaleMessage(language, newMessages);
}
function addCredentialTranslation(nodeCredentialTranslation, language) {
	const newMessages = { "n8n-nodes-base": { credentials: nodeCredentialTranslation } };
	i18nInstance.global.mergeLocaleMessage(language, newMessages);
}
function addHeaders(headers, language) {
	i18nInstance.global.mergeLocaleMessage(language, { headers });
}
const i18n = new I18nClass();
function useI18n() {
	return i18n;
}
var isVue2 = false;
function set(target, key, val) {
	if (Array.isArray(target)) {
		target.length = Math.max(target.length, key);
		target.splice(key, 1, val);
		return val;
	}
	target[key] = val;
	return val;
}
function computedWithControl(source, fn) {
	let v = void 0;
	let track;
	let trigger;
	const dirty = ref(true);
	const update = () => {
		dirty.value = true;
		trigger();
	};
	watch(source, update, { flush: "sync" });
	const get = typeof fn === "function" ? fn : fn.get;
	const set$1 = typeof fn === "function" ? void 0 : fn.set;
	const result = customRef((_track, _trigger) => {
		track = _track;
		trigger = _trigger;
		return {
			get() {
				if (dirty.value) {
					v = get();
					dirty.value = false;
				}
				track();
				return v;
			},
			set(v2) {
				set$1?.(v2);
			}
		};
	});
	if (Object.isExtensible(result)) result.trigger = update;
	return result;
}
function tryOnScopeDispose(fn) {
	if (getCurrentScope()) {
		onScopeDispose(fn);
		return true;
	}
	return false;
}
function createEventHook() {
	const fns = /* @__PURE__ */ new Set();
	const off = (fn) => {
		fns.delete(fn);
	};
	const on = (fn) => {
		fns.add(fn);
		const offFn = () => off(fn);
		tryOnScopeDispose(offFn);
		return { off: offFn };
	};
	const trigger = (...args) => {
		return Promise.all(Array.from(fns).map((fn) => fn(...args)));
	};
	return {
		on,
		off,
		trigger
	};
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
var provideLocal = (key, value) => {
	var _a;
	const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
	if (instance == null) throw new Error("provideLocal must be called in setup");
	if (!localProvidedStateMap.has(instance)) localProvidedStateMap.set(instance, /* @__PURE__ */ Object.create(null));
	const localProvidedState = localProvidedStateMap.get(instance);
	localProvidedState[key] = value;
	provide(key, value);
};
var injectLocal = (...args) => {
	var _a;
	const key = args[0];
	const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
	if (instance == null) throw new Error("injectLocal must be called in setup");
	if (localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance)) return localProvidedStateMap.get(instance)[key];
	return inject(...args);
};
function createInjectionState(composable, options) {
	const key = (options == null ? void 0 : options.injectionKey) || Symbol(composable.name || "InjectionState");
	const defaultValue = options == null ? void 0 : options.defaultValue;
	const useProvidingState = (...args) => {
		const state = composable(...args);
		provideLocal(key, state);
		return state;
	};
	const useInjectedState = () => injectLocal(key, defaultValue);
	return [useProvidingState, useInjectedState];
}
function toValue(r) {
	return typeof r === "function" ? r() : unref(r);
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject$3 = (val) => toString.call(val) === "[object Object]";
var timestamp = () => +Date.now();
var noop = () => {};
var hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);
var isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
	var _a, _b;
	return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
	function wrapper(...args) {
		return new Promise((resolve, reject) => {
			Promise.resolve(filter(() => fn.apply(this, args), {
				fn,
				thisArg: this,
				args
			})).then(resolve).catch(reject);
		});
	}
	return wrapper;
}
var bypassFilter = (invoke) => {
	return invoke();
};
function debounceFilter(ms, options = {}) {
	let timer;
	let maxTimer;
	let lastRejector = noop;
	const _clearTimeout = (timer2) => {
		clearTimeout(timer2);
		lastRejector();
		lastRejector = noop;
	};
	const filter = (invoke) => {
		const duration = toValue(ms);
		const maxDuration = toValue(options.maxWait);
		if (timer) _clearTimeout(timer);
		if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
			if (maxTimer) {
				_clearTimeout(maxTimer);
				maxTimer = null;
			}
			return Promise.resolve(invoke());
		}
		return new Promise((resolve, reject) => {
			lastRejector = options.rejectOnCancel ? reject : resolve;
			if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
				if (timer) _clearTimeout(timer);
				maxTimer = null;
				resolve(invoke());
			}, maxDuration);
			timer = setTimeout(() => {
				if (maxTimer) _clearTimeout(maxTimer);
				maxTimer = null;
				resolve(invoke());
			}, duration);
		});
	};
	return filter;
}
function throttleFilter(...args) {
	let lastExec = 0;
	let timer;
	let isLeading = true;
	let lastRejector = noop;
	let lastValue;
	let ms;
	let trailing;
	let leading;
	let rejectOnCancel;
	if (!isRef(args[0]) && typeof args[0] === "object") ({delay: ms, trailing = true, leading = true, rejectOnCancel = false} = args[0]);
	else [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
	const clear = () => {
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
			lastRejector();
			lastRejector = noop;
		}
	};
	const filter = (_invoke) => {
		const duration = toValue(ms);
		const elapsed = Date.now() - lastExec;
		const invoke = () => {
			return lastValue = _invoke();
		};
		clear();
		if (duration <= 0) {
			lastExec = Date.now();
			return invoke();
		}
		if (elapsed > duration && (leading || !isLeading)) {
			lastExec = Date.now();
			invoke();
		} else if (trailing) lastValue = new Promise((resolve, reject) => {
			lastRejector = rejectOnCancel ? reject : resolve;
			timer = setTimeout(() => {
				lastExec = Date.now();
				isLeading = true;
				resolve(invoke());
				clear();
			}, Math.max(0, duration - elapsed));
		});
		if (!leading && !timer) timer = setTimeout(() => isLeading = true, duration);
		isLeading = false;
		return lastValue;
	};
	return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
	const isActive = ref(true);
	function pause() {
		isActive.value = false;
	}
	function resume() {
		isActive.value = true;
	}
	const eventFilter = (...args) => {
		if (isActive.value) extendFilter(...args);
	};
	return {
		isActive: readonly(isActive),
		pause,
		resume,
		eventFilter
	};
}
var directiveHooks = {
	mounted: "mounted",
	updated: "updated",
	unmounted: "unmounted"
};
function cacheStringFunction(fn) {
	const cache$1 = /* @__PURE__ */ Object.create(null);
	return (str) => {
		return cache$1[str] || (cache$1[str] = fn(str));
	};
}
var hyphenateRE = /\B([A-Z])/g;
cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
cacheStringFunction((str) => {
	return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
	return new Promise((resolve, reject) => {
		if (throwOnTimeout) setTimeout(() => reject(reason), ms);
		else setTimeout(resolve, ms);
	});
}
function createSingletonPromise(fn) {
	let _promise;
	function wrapper() {
		if (!_promise) _promise = fn();
		return _promise;
	}
	wrapper.reset = async () => {
		const _prev = _promise;
		_promise = void 0;
		if (_prev) await _prev;
	};
	return wrapper;
}
function getLifeCycleTarget(target) {
	return target || getCurrentInstance();
}
function toRef(...args) {
	if (args.length !== 1) return toRef$1(...args);
	const r = args[0];
	return typeof r === "function" ? readonly(customRef(() => ({
		get: r,
		set: noop
	}))) : ref(r);
}
function useDebounceFn(fn, ms = 200, options = {}) {
	return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
	const debounced = ref(value.value);
	const updater = useDebounceFn(() => {
		debounced.value = value.value;
	}, ms, options);
	watch(value, () => updater());
	return debounced;
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
	return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function refThrottled(value, delay = 200, trailing = true, leading = true) {
	if (delay <= 0) return value;
	const throttled = ref(value.value);
	const updater = useThrottleFn(() => {
		throttled.value = value.value;
	}, delay, trailing, leading);
	watch(value, () => updater());
	return throttled;
}
function watchWithFilter(source, cb, options = {}) {
	const { eventFilter = bypassFilter,...watchOptions } = options;
	return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
function watchPausable(source, cb, options = {}) {
	const { eventFilter: filter,...watchOptions } = options;
	const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
	return {
		stop: watchWithFilter(source, cb, {
			...watchOptions,
			eventFilter
		}),
		pause,
		resume,
		isActive
	};
}
function toRefs(objectRef, options = {}) {
	if (!isRef(objectRef)) return toRefs$1(objectRef);
	const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
	for (const key in objectRef.value) result[key] = customRef(() => ({
		get() {
			return objectRef.value[key];
		},
		set(v) {
			var _a;
			if ((_a = toValue(options.replaceRef)) != null ? _a : true) if (Array.isArray(objectRef.value)) {
				const copy = [...objectRef.value];
				copy[key] = v;
				objectRef.value = copy;
			} else {
				const newObject = {
					...objectRef.value,
					[key]: v
				};
				Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
				objectRef.value = newObject;
			}
			else objectRef.value[key] = v;
		}
	}));
	return result;
}
function tryOnMounted(fn, sync = true, target) {
	if (getLifeCycleTarget()) onMounted(fn, target);
	else if (sync) fn();
	else nextTick(fn);
}
function createUntil(r, isNot = false) {
	function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
		let stop = null;
		const promises = [new Promise((resolve) => {
			stop = watch(r, (v) => {
				if (condition(v) !== isNot) {
					stop?.();
					resolve(v);
				}
			}, {
				flush,
				deep,
				immediate: true
			});
		})];
		if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop()));
		return Promise.race(promises);
	}
	function toBe(value, options) {
		if (!isRef(value)) return toMatch((v) => v === value, options);
		const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
		let stop = null;
		const promises = [new Promise((resolve) => {
			stop = watch([r, value], ([v1, v2]) => {
				if (isNot !== (v1 === v2)) {
					stop?.();
					resolve(v1);
				}
			}, {
				flush,
				deep,
				immediate: true
			});
		})];
		if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
			stop?.();
			return toValue(r);
		}));
		return Promise.race(promises);
	}
	function toBeTruthy(options) {
		return toMatch((v) => Boolean(v), options);
	}
	function toBeNull(options) {
		return toBe(null, options);
	}
	function toBeUndefined(options) {
		return toBe(void 0, options);
	}
	function toBeNaN(options) {
		return toMatch(Number.isNaN, options);
	}
	function toContains(value, options) {
		return toMatch((v) => {
			const array = Array.from(v);
			return array.includes(value) || array.includes(toValue(value));
		}, options);
	}
	function changed(options) {
		return changedTimes(1, options);
	}
	function changedTimes(n = 1, options) {
		let count = -1;
		return toMatch(() => {
			count += 1;
			return count >= n;
		}, options);
	}
	if (Array.isArray(toValue(r))) return {
		toMatch,
		toContains,
		changed,
		changedTimes,
		get not() {
			return createUntil(r, !isNot);
		}
	};
	else return {
		toMatch,
		toBe,
		toBeTruthy,
		toBeNull,
		toBeNaN,
		toBeUndefined,
		changed,
		changedTimes,
		get not() {
			return createUntil(r, !isNot);
		}
	};
}
function until(r) {
	return createUntil(r);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
	const { immediate = true, immediateCallback = false } = options;
	let timer = null;
	const isActive = ref(false);
	function clean() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}
	function pause() {
		isActive.value = false;
		clean();
	}
	function resume() {
		const intervalValue = toValue(interval);
		if (intervalValue <= 0) return;
		isActive.value = true;
		if (immediateCallback) cb();
		clean();
		timer = setInterval(cb, intervalValue);
	}
	if (immediate && isClient) resume();
	if (isRef(interval) || typeof interval === "function") tryOnScopeDispose(watch(interval, () => {
		if (isActive.value && isClient) resume();
	}));
	tryOnScopeDispose(pause);
	return {
		isActive,
		pause,
		resume
	};
}
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true } = options;
	const isPending = ref(false);
	let timer = null;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = null;
			cb(...args);
		}, toValue(interval));
	}
	if (immediate) {
		isPending.value = true;
		if (isClient) start();
	}
	tryOnScopeDispose(stop);
	return {
		isPending: readonly(isPending),
		start,
		stop
	};
}
function watchDebounced(source, cb, options = {}) {
	const { debounce = 0, maxWait = void 0,...watchOptions } = options;
	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: debounceFilter(debounce, { maxWait })
	});
}
function watchOnce(source, cb, options) {
	const stop = watch(source, (...args) => {
		nextTick(() => stop());
		return cb(...args);
	}, options);
	return stop;
}
function watchThrottled(source, cb, options = {}) {
	const { throttle = 0, trailing = true, leading = true,...watchOptions } = options;
	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: throttleFilter(throttle, trailing, leading)
	});
}
init_dist();
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
	let options;
	if (isRef(optionsOrRef)) options = { evaluating: optionsOrRef };
	else options = optionsOrRef || {};
	const { lazy = false, evaluating = void 0, shallow = true, onError = noop } = options;
	const started = ref(!lazy);
	const current = shallow ? shallowRef(initialState) : ref(initialState);
	let counter = 0;
	watchEffect(async (onInvalidate) => {
		if (!started.value) return;
		counter++;
		const counterAtBeginning = counter;
		let hasFinished = false;
		if (evaluating) Promise.resolve().then(() => {
			evaluating.value = true;
		});
		try {
			const result = await evaluationCallback((cancelCallback) => {
				onInvalidate(() => {
					if (evaluating) evaluating.value = false;
					if (!hasFinished) cancelCallback();
				});
			});
			if (counterAtBeginning === counter) current.value = result;
		} catch (e) {
			onError(e);
		} finally {
			if (evaluating && counterAtBeginning === counter) evaluating.value = false;
			hasFinished = true;
		}
	});
	if (lazy) return computed(() => {
		started.value = true;
		return current.value;
	});
	else return current;
}
function unrefElement(elRef) {
	var _a;
	const plain = toValue(elRef);
	return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
isClient && window.location;
function useEventListener(...args) {
	let target;
	let events;
	let listeners;
	let options;
	if (typeof args[0] === "string" || Array.isArray(args[0])) {
		[events, listeners, options] = args;
		target = defaultWindow;
	} else [target, events, listeners, options] = args;
	if (!target) return noop;
	if (!Array.isArray(events)) events = [events];
	if (!Array.isArray(listeners)) listeners = [listeners];
	const cleanups = [];
	const cleanup = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
	};
	const register = (el, event, listener, options2) => {
		el.addEventListener(event, listener, options2);
		return () => el.removeEventListener(event, listener, options2);
	};
	const stopWatch = watch(() => [unrefElement(target), toValue(options)], ([el, options2]) => {
		cleanup();
		if (!el) return;
		const optionsClone = isObject$3(options2) ? { ...options2 } : options2;
		cleanups.push(...events.flatMap((event) => {
			return listeners.map((listener) => register(el, event, listener, optionsClone));
		}));
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(stop);
	return stop;
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
	const { window: window$1 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
	if (!window$1) return noop;
	if (isIOS && !_iOSWorkaround) {
		_iOSWorkaround = true;
		Array.from(window$1.document.body.children).forEach((el) => el.addEventListener("click", noop));
		window$1.document.documentElement.addEventListener("click", noop);
	}
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return ignore.some((target2) => {
			if (typeof target2 === "string") return Array.from(window$1.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement(target2);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	const listener = (event) => {
		const el = unrefElement(target);
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if (event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	const cleanup = [
		useEventListener(window$1, "click", listener, {
			passive: true,
			capture
		}),
		useEventListener(window$1, "pointerdown", (e) => {
			const el = unrefElement(target);
			shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
		}, { passive: true }),
		detectIframe && useEventListener(window$1, "blur", (event) => {
			setTimeout(() => {
				var _a;
				const el = unrefElement(target);
				if (((_a = window$1.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window$1.document.activeElement))) handler(event);
			}, 0);
		})
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	return stop;
}
function createKeyPredicate(keyFilter) {
	if (typeof keyFilter === "function") return keyFilter;
	else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
	else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
	return () => true;
}
function onKeyStroke(...args) {
	let key;
	let handler;
	let options = {};
	if (args.length === 3) {
		key = args[0];
		handler = args[1];
		options = args[2];
	} else if (args.length === 2) if (typeof args[1] === "object") {
		key = true;
		handler = args[0];
		options = args[1];
	} else {
		key = args[0];
		handler = args[1];
	}
	else {
		key = true;
		handler = args[0];
	}
	const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
	const predicate = createKeyPredicate(key);
	const listener = (e) => {
		if (e.repeat && toValue(dedupe)) return;
		if (predicate(e)) handler(e);
	};
	return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keydown"
	});
}
function onKeyUp(key, handler, options = {}) {
	return onKeyStroke(key, handler, {
		...options,
		eventName: "keyup"
	});
}
function useMounted() {
	const isMounted = ref(false);
	const instance = getCurrentInstance();
	if (instance) onMounted(() => {
		isMounted.value = true;
	}, instance);
	return isMounted;
}
function useSupported(callback) {
	const isMounted = useMounted();
	return computed(() => {
		isMounted.value;
		return Boolean(callback());
	});
}
function useMutationObserver(target, callback, options = {}) {
	const { window: window$1 = defaultWindow,...mutationOptions } = options;
	let observer;
	const isSupported = useSupported(() => window$1 && "MutationObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const targets = computed(() => {
		const value = toValue(target);
		const items = (Array.isArray(value) ? value : [value]).map(unrefElement).filter(notNullish);
		return new Set(items);
	});
	const stopWatch = watch(() => targets.value, (targets2) => {
		cleanup();
		if (isSupported.value && targets2.size) {
			observer = new MutationObserver(callback);
			targets2.forEach((el) => observer.observe(el, mutationOptions));
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const takeRecords = () => {
		return observer == null ? void 0 : observer.takeRecords();
	};
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop,
		takeRecords
	};
}
function useActiveElement(options = {}) {
	var _a;
	const { window: window$1 = defaultWindow, deep = true, triggerOnRemoval = false } = options;
	const document$1 = (_a = options.document) != null ? _a : window$1 == null ? void 0 : window$1.document;
	const getDeepActiveElement = () => {
		var _a2;
		let element = document$1 == null ? void 0 : document$1.activeElement;
		if (deep) while (element == null ? void 0 : element.shadowRoot) element = (_a2 = element == null ? void 0 : element.shadowRoot) == null ? void 0 : _a2.activeElement;
		return element;
	};
	const activeElement = ref();
	const trigger = () => {
		activeElement.value = getDeepActiveElement();
	};
	if (window$1) {
		useEventListener(window$1, "blur", (event) => {
			if (event.relatedTarget !== null) return;
			trigger();
		}, true);
		useEventListener(window$1, "focus", trigger, true);
	}
	if (triggerOnRemoval) useMutationObserver(document$1, (mutations) => {
		mutations.filter((m) => m.removedNodes.length).map((n) => Array.from(n.removedNodes)).flat().forEach((node) => {
			if (node === activeElement.value) trigger();
		});
	}, {
		childList: true,
		subtree: true
	});
	trigger();
	return activeElement;
}
function useRafFn(fn, options = {}) {
	const { immediate = true, fpsLimit = void 0, window: window$1 = defaultWindow } = options;
	const isActive = ref(false);
	const intervalLimit = fpsLimit ? 1e3 / fpsLimit : null;
	let previousFrameTimestamp = 0;
	let rafId = null;
	function loop(timestamp$1) {
		if (!isActive.value || !window$1) return;
		if (!previousFrameTimestamp) previousFrameTimestamp = timestamp$1;
		const delta = timestamp$1 - previousFrameTimestamp;
		if (intervalLimit && delta < intervalLimit) {
			rafId = window$1.requestAnimationFrame(loop);
			return;
		}
		previousFrameTimestamp = timestamp$1;
		fn({
			delta,
			timestamp: timestamp$1
		});
		rafId = window$1.requestAnimationFrame(loop);
	}
	function resume() {
		if (!isActive.value && window$1) {
			isActive.value = true;
			previousFrameTimestamp = 0;
			rafId = window$1.requestAnimationFrame(loop);
		}
	}
	function pause() {
		isActive.value = false;
		if (rafId != null && window$1) {
			window$1.cancelAnimationFrame(rafId);
			rafId = null;
		}
	}
	if (immediate) resume();
	tryOnScopeDispose(pause);
	return {
		isActive: readonly(isActive),
		pause,
		resume
	};
}
function useAsyncState(promise, initialState, options) {
	const { immediate = true, delay = 0, onError = noop, onSuccess = noop, resetOnExecute = true, shallow = true, throwError } = options != null ? options : {};
	const state = shallow ? shallowRef(initialState) : ref(initialState);
	const isReady = ref(false);
	const isLoading = ref(false);
	const error$1 = shallowRef(void 0);
	async function execute(delay2 = 0, ...args) {
		if (resetOnExecute) state.value = initialState;
		error$1.value = void 0;
		isReady.value = false;
		isLoading.value = true;
		if (delay2 > 0) await promiseTimeout(delay2);
		const _promise = typeof promise === "function" ? promise(...args) : promise;
		try {
			const data = await _promise;
			state.value = data;
			isReady.value = true;
			onSuccess(data);
		} catch (e) {
			error$1.value = e;
			onError(e);
			if (throwError) throw e;
		} finally {
			isLoading.value = false;
		}
		return state.value;
	}
	if (immediate) execute(delay);
	const shell = {
		state,
		isReady,
		isLoading,
		error: error$1,
		execute
	};
	function waitUntilIsLoaded() {
		return new Promise((resolve, reject) => {
			until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
		});
	}
	return {
		...shell,
		then(onFulfilled, onRejected) {
			return waitUntilIsLoaded().then(onFulfilled, onRejected);
		}
	};
}
function useMediaQuery(query, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	const isSupported = useSupported(() => window$1 && "matchMedia" in window$1 && typeof window$1.matchMedia === "function");
	let mediaQuery;
	const matches = ref(false);
	const handler = (event) => {
		matches.value = event.matches;
	};
	const cleanup = () => {
		if (!mediaQuery) return;
		if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", handler);
		else mediaQuery.removeListener(handler);
	};
	const stopWatch = watchEffect(() => {
		if (!isSupported.value) return;
		cleanup();
		mediaQuery = window$1.matchMedia(toValue(query));
		if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", handler);
		else mediaQuery.addListener(handler);
		matches.value = mediaQuery.matches;
	});
	tryOnScopeDispose(() => {
		stopWatch();
		cleanup();
		mediaQuery = void 0;
	});
	return matches;
}
function usePermission(permissionDesc, options = {}) {
	const { controls = false, navigator = defaultNavigator } = options;
	const isSupported = useSupported(() => navigator && "permissions" in navigator);
	let permissionStatus;
	const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
	const state = ref();
	const onChange = () => {
		if (permissionStatus) state.value = permissionStatus.state;
	};
	const query = createSingletonPromise(async () => {
		if (!isSupported.value) return;
		if (!permissionStatus) try {
			permissionStatus = await navigator.permissions.query(desc);
			useEventListener(permissionStatus, "change", onChange);
			onChange();
		} catch (e) {
			state.value = "prompt";
		}
		return permissionStatus;
	});
	query();
	if (controls) return {
		state,
		isSupported,
		query
	};
	else return state;
}
function useClipboard(options = {}) {
	const { navigator = defaultNavigator, read = false, source, copiedDuring = 1500, legacy = false } = options;
	const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
	const permissionRead = usePermission("clipboard-read");
	const permissionWrite = usePermission("clipboard-write");
	const isSupported = computed(() => isClipboardApiSupported.value || legacy);
	const text = ref("");
	const copied = ref(false);
	const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
	function updateText() {
		if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) navigator.clipboard.readText().then((value) => {
			text.value = value;
		});
		else text.value = legacyRead();
	}
	if (isSupported.value && read) useEventListener(["copy", "cut"], updateText);
	async function copy(value = toValue(source)) {
		if (isSupported.value && value != null) {
			if (isClipboardApiSupported.value && isAllowed(permissionWrite.value)) await navigator.clipboard.writeText(value);
			else legacyCopy(value);
			text.value = value;
			copied.value = true;
			timeout.start();
		}
	}
	function legacyCopy(value) {
		const ta = document.createElement("textarea");
		ta.value = value != null ? value : "";
		ta.style.position = "absolute";
		ta.style.opacity = "0";
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		ta.remove();
	}
	function legacyRead() {
		var _a, _b, _c;
		return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
	}
	function isAllowed(status) {
		return status === "granted" || status === "prompt";
	}
	return {
		isSupported,
		text,
		copied,
		copy
	};
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
	if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
	return _global[globalKey];
}
function getSSRHandler(key, fallback) {
	return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
	return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
	boolean: {
		read: (v) => v === "true",
		write: (v) => String(v)
	},
	object: {
		read: (v) => JSON.parse(v),
		write: (v) => JSON.stringify(v)
	},
	number: {
		read: (v) => Number.parseFloat(v),
		write: (v) => String(v)
	},
	any: {
		read: (v) => v,
		write: (v) => String(v)
	},
	string: {
		read: (v) => v,
		write: (v) => String(v)
	},
	map: {
		read: (v) => new Map(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v.entries()))
	},
	set: {
		read: (v) => new Set(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v))
	},
	date: {
		read: (v) => new Date(v),
		write: (v) => v.toISOString()
	}
};
var customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
	var _a;
	const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window$1 = defaultWindow, eventFilter, onError = (e) => {
		console.error(e);
	}, initOnMounted } = options;
	const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
	if (!storage) try {
		storage = getSSRHandler("getDefaultStorage", () => {
			var _a2;
			return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
		})();
	} catch (e) {
		onError(e);
	}
	if (!storage) return data;
	const rawInit = toValue(defaults);
	const type = guessSerializerType(rawInit);
	const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
	const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), {
		flush,
		deep,
		eventFilter
	});
	if (window$1 && listenToStorageChanges) tryOnMounted(() => {
		useEventListener(window$1, "storage", update);
		useEventListener(window$1, customStorageEventName, updateFromCustomEvent);
		if (initOnMounted) update();
	});
	if (!initOnMounted) update();
	function dispatchWriteEvent(oldValue, newValue) {
		if (window$1) window$1.dispatchEvent(new CustomEvent(customStorageEventName, { detail: {
			key,
			oldValue,
			newValue,
			storageArea: storage
		} }));
	}
	function write(v) {
		try {
			const oldValue = storage.getItem(key);
			if (v == null) {
				dispatchWriteEvent(oldValue, null);
				storage.removeItem(key);
			} else {
				const serialized = serializer.write(v);
				if (oldValue !== serialized) {
					storage.setItem(key, serialized);
					dispatchWriteEvent(oldValue, serialized);
				}
			}
		} catch (e) {
			onError(e);
		}
	}
	function read(event) {
		const rawValue = event ? event.newValue : storage.getItem(key);
		if (rawValue == null) {
			if (writeDefaults && rawInit != null) storage.setItem(key, serializer.write(rawInit));
			return rawInit;
		} else if (!event && mergeDefaults) {
			const value = serializer.read(rawValue);
			if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
			else if (type === "object" && !Array.isArray(value)) return {
				...rawInit,
				...value
			};
			return value;
		} else if (typeof rawValue !== "string") return rawValue;
		else return serializer.read(rawValue);
	}
	function update(event) {
		if (event && event.storageArea !== storage) return;
		if (event && event.key == null) {
			data.value = rawInit;
			return;
		}
		if (event && event.key !== key) return;
		pauseWatch();
		try {
			if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value)) data.value = read(event);
		} catch (e) {
			onError(e);
		} finally {
			if (event) nextTick(resumeWatch);
			else resumeWatch();
		}
	}
	function updateFromCustomEvent(event) {
		update(event.detail);
	}
	return data;
}
function useCssVar(prop, target, options = {}) {
	const { window: window$1 = defaultWindow, initialValue = "", observe = false } = options;
	const variable = ref(initialValue);
	const elRef = computed(() => {
		var _a;
		return unrefElement(target) || ((_a = window$1 == null ? void 0 : window$1.document) == null ? void 0 : _a.documentElement);
	});
	function updateCssVar() {
		var _a;
		const key = toValue(prop);
		const el = toValue(elRef);
		if (el && window$1) variable.value = ((_a = window$1.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim()) || initialValue;
	}
	if (observe) useMutationObserver(elRef, updateCssVar, {
		attributeFilter: ["style", "class"],
		window: window$1
	});
	watch([elRef, () => toValue(prop)], updateCssVar, { immediate: true });
	watch(variable, (val) => {
		var _a;
		if ((_a = elRef.value) == null ? void 0 : _a.style) elRef.value.style.setProperty(toValue(prop), val);
	});
	return variable;
}
function useDocumentVisibility(options = {}) {
	const { document: document$1 = defaultDocument } = options;
	if (!document$1) return ref("visible");
	const visibility = ref(document$1.visibilityState);
	useEventListener(document$1, "visibilitychange", () => {
		visibility.value = document$1.visibilityState;
	});
	return visibility;
}
function useResizeObserver(target, callback, options = {}) {
	const { window: window$1 = defaultWindow,...observerOptions } = options;
	let observer;
	const isSupported = useSupported(() => window$1 && "ResizeObserver" in window$1);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(computed(() => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]), (els) => {
		cleanup();
		if (isSupported.value && window$1) {
			observer = new ResizeObserver(callback);
			for (const _el of els) _el && observer.observe(_el, observerOptions);
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop
	};
}
function useElementHover(el, options = {}) {
	const { delayEnter = 0, delayLeave = 0, window: window$1 = defaultWindow } = options;
	const isHovered = ref(false);
	let timer;
	const toggle = (entering) => {
		const delay = entering ? delayEnter : delayLeave;
		if (timer) {
			clearTimeout(timer);
			timer = void 0;
		}
		if (delay) timer = setTimeout(() => isHovered.value = entering, delay);
		else isHovered.value = entering;
	};
	if (!window$1) return isHovered;
	useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
	useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
	return isHovered;
}
function useElementSize(target, initialSize = {
	width: 0,
	height: 0
}, options = {}) {
	const { window: window$1 = defaultWindow, box = "content-box" } = options;
	const isSVG = computed(() => {
		var _a, _b;
		return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
	});
	const width = ref(initialSize.width);
	const height = ref(initialSize.height);
	const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
		const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
		if (window$1 && isSVG.value) {
			const $elem = unrefElement(target);
			if ($elem) {
				const rect = $elem.getBoundingClientRect();
				width.value = rect.width;
				height.value = rect.height;
			}
		} else if (boxSize) {
			const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
			width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
			height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
		} else {
			width.value = entry.contentRect.width;
			height.value = entry.contentRect.height;
		}
	}, options);
	tryOnMounted(() => {
		const ele = unrefElement(target);
		if (ele) {
			width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
			height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
		}
	});
	const stop2 = watch(() => unrefElement(target), (ele) => {
		width.value = ele ? initialSize.width : 0;
		height.value = ele ? initialSize.height : 0;
	});
	function stop() {
		stop1();
		stop2();
	}
	return {
		width,
		height,
		stop
	};
}
function useIntersectionObserver(target, callback, options = {}) {
	const { root: root$1, rootMargin = "0px", threshold = .1, window: window$1 = defaultWindow, immediate = true } = options;
	const isSupported = useSupported(() => window$1 && "IntersectionObserver" in window$1);
	const targets = computed(() => {
		const _target = toValue(target);
		return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
	});
	let cleanup = noop;
	const isActive = ref(immediate);
	const stopWatch = isSupported.value ? watch(() => [
		targets.value,
		unrefElement(root$1),
		isActive.value
	], ([targets2, root2]) => {
		cleanup();
		if (!isActive.value) return;
		if (!targets2.length) return;
		const observer = new IntersectionObserver(callback, {
			root: unrefElement(root2),
			rootMargin,
			threshold
		});
		targets2.forEach((el) => el && observer.observe(el));
		cleanup = () => {
			observer.disconnect();
			cleanup = noop;
		};
	}, {
		immediate,
		flush: "post"
	}) : noop;
	const stop = () => {
		cleanup();
		stopWatch();
		isActive.value = false;
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		isActive,
		pause() {
			cleanup();
			isActive.value = false;
		},
		resume() {
			isActive.value = true;
		},
		stop
	};
}
function useFavicon(newIcon = null, options = {}) {
	const { baseUrl = "", rel = "icon", document: document$1 = defaultDocument } = options;
	const favicon = toRef(newIcon);
	const applyIcon = (icon) => {
		const elements = document$1 == null ? void 0 : document$1.head.querySelectorAll(`link[rel*="${rel}"]`);
		if (!elements || elements.length === 0) {
			const link = document$1 == null ? void 0 : document$1.createElement("link");
			if (link) {
				link.rel = rel;
				link.href = `${baseUrl}${icon}`;
				link.type = `image/${icon.split(".").pop()}`;
				document$1?.head.append(link);
			}
			return;
		}
		elements?.forEach((el) => el.href = `${baseUrl}${icon}`);
	};
	watch(favicon, (i, o) => {
		if (typeof i === "string" && i !== o) applyIcon(i);
	}, { immediate: true });
	return favicon;
}
var DEFAULT_OPTIONS = {
	multiple: true,
	accept: "*",
	reset: false,
	directory: false
};
function useFileDialog(options = {}) {
	const { document: document$1 = defaultDocument } = options;
	const files = ref(null);
	const { on: onChange, trigger } = createEventHook();
	let input;
	if (document$1) {
		input = document$1.createElement("input");
		input.type = "file";
		input.onchange = (event) => {
			files.value = event.target.files;
			trigger(files.value);
		};
	}
	const reset = () => {
		files.value = null;
		if (input && input.value) {
			input.value = "";
			trigger(null);
		}
	};
	const open = (localOptions) => {
		if (!input) return;
		const _options = {
			...DEFAULT_OPTIONS,
			...options,
			...localOptions
		};
		input.multiple = _options.multiple;
		input.accept = _options.accept;
		input.webkitdirectory = _options.directory;
		if (hasOwn(_options, "capture")) input.capture = _options.capture;
		if (_options.reset) reset();
		input.click();
	};
	return {
		files: readonly(files),
		open,
		reset,
		onChange
	};
}
var ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
	const { throttle = 0, idle = 200, onStop = noop, onScroll = noop, offset = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	}, eventListenerOptions = {
		capture: false,
		passive: true
	}, behavior = "auto", window: window$1 = defaultWindow, onError = (e) => {
		console.error(e);
	} } = options;
	const internalX = ref(0);
	const internalY = ref(0);
	const x = computed({
		get() {
			return internalX.value;
		},
		set(x2) {
			scrollTo$1(x2, void 0);
		}
	});
	const y = computed({
		get() {
			return internalY.value;
		},
		set(y2) {
			scrollTo$1(void 0, y2);
		}
	});
	function scrollTo$1(_x, _y) {
		var _a, _b, _c, _d;
		if (!window$1) return;
		const _element = toValue(element);
		if (!_element) return;
		(_c = _element instanceof Document ? window$1.document.body : _element) == null || _c.scrollTo({
			top: (_a = toValue(_y)) != null ? _a : y.value,
			left: (_b = toValue(_x)) != null ? _b : x.value,
			behavior: toValue(behavior)
		});
		const scrollContainer = ((_d = _element == null ? void 0 : _element.document) == null ? void 0 : _d.documentElement) || (_element == null ? void 0 : _element.documentElement) || _element;
		if (x != null) internalX.value = scrollContainer.scrollLeft;
		if (y != null) internalY.value = scrollContainer.scrollTop;
	}
	const isScrolling = ref(false);
	const arrivedState = reactive({
		left: true,
		right: false,
		top: true,
		bottom: false
	});
	const directions = reactive({
		left: false,
		right: false,
		top: false,
		bottom: false
	});
	const onScrollEnd = (e) => {
		if (!isScrolling.value) return;
		isScrolling.value = false;
		directions.left = false;
		directions.right = false;
		directions.top = false;
		directions.bottom = false;
		onStop(e);
	};
	const onScrollEndDebounced = useDebounceFn(onScrollEnd, throttle + idle);
	const setArrivedState = (target) => {
		var _a;
		if (!window$1) return;
		const el = ((_a = target == null ? void 0 : target.document) == null ? void 0 : _a.documentElement) || (target == null ? void 0 : target.documentElement) || unrefElement(target);
		const { display, flexDirection } = getComputedStyle(el);
		const scrollLeft = el.scrollLeft;
		directions.left = scrollLeft < internalX.value;
		directions.right = scrollLeft > internalX.value;
		const left = Math.abs(scrollLeft) <= (offset.left || 0);
		const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
		if (display === "flex" && flexDirection === "row-reverse") {
			arrivedState.left = right;
			arrivedState.right = left;
		} else {
			arrivedState.left = left;
			arrivedState.right = right;
		}
		internalX.value = scrollLeft;
		let scrollTop = el.scrollTop;
		if (target === window$1.document && !scrollTop) scrollTop = window$1.document.body.scrollTop;
		directions.top = scrollTop < internalY.value;
		directions.bottom = scrollTop > internalY.value;
		const top = Math.abs(scrollTop) <= (offset.top || 0);
		const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
		if (display === "flex" && flexDirection === "column-reverse") {
			arrivedState.top = bottom;
			arrivedState.bottom = top;
		} else {
			arrivedState.top = top;
			arrivedState.bottom = bottom;
		}
		internalY.value = scrollTop;
	};
	const onScrollHandler = (e) => {
		var _a;
		if (!window$1) return;
		setArrivedState((_a = e.target.documentElement) != null ? _a : e.target);
		isScrolling.value = true;
		onScrollEndDebounced(e);
		onScroll(e);
	};
	useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
	tryOnMounted(() => {
		try {
			const _element = toValue(element);
			if (!_element) return;
			setArrivedState(_element);
		} catch (e) {
			onError(e);
		}
	});
	useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
	return {
		x,
		y,
		isScrolling,
		arrivedState,
		directions,
		measure() {
			const _element = toValue(element);
			if (window$1 && _element) setArrivedState(_element);
		}
	};
}
function useLocalStorage(key, initialValue, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	return useStorage(key, initialValue, window$1 == null ? void 0 : window$1.localStorage, options);
}
function useSessionStorage(key, initialValue, options = {}) {
	const { window: window$1 = defaultWindow } = options;
	return useStorage(key, initialValue, window$1 == null ? void 0 : window$1.sessionStorage, options);
}
function useSpeechRecognition(options = {}) {
	const { interimResults = true, continuous = true, window: window$1 = defaultWindow } = options;
	const lang = toRef(options.lang || "en-US");
	const isListening = ref(false);
	const isFinal = ref(false);
	const result = ref("");
	const error$1 = shallowRef(void 0);
	const toggle = (value = !isListening.value) => {
		isListening.value = value;
	};
	const start = () => {
		isListening.value = true;
	};
	const stop = () => {
		isListening.value = false;
	};
	const SpeechRecognition = window$1 && (window$1.SpeechRecognition || window$1.webkitSpeechRecognition);
	const isSupported = useSupported(() => SpeechRecognition);
	let recognition;
	if (isSupported.value) {
		recognition = new SpeechRecognition();
		recognition.continuous = continuous;
		recognition.interimResults = interimResults;
		recognition.lang = toValue(lang);
		recognition.onstart = () => {
			isFinal.value = false;
		};
		watch(lang, (lang2) => {
			if (recognition && !isListening.value) recognition.lang = lang2;
		});
		recognition.onresult = (event) => {
			const currentResult = event.results[event.resultIndex];
			const { transcript } = currentResult[0];
			isFinal.value = currentResult.isFinal;
			result.value = transcript;
			error$1.value = void 0;
		};
		recognition.onerror = (event) => {
			error$1.value = event;
		};
		recognition.onend = () => {
			isListening.value = false;
			recognition.lang = toValue(lang);
		};
		watch(isListening, () => {
			if (isListening.value) recognition.start();
			else recognition.stop();
		});
	}
	tryOnScopeDispose(() => {
		isListening.value = false;
	});
	return {
		isSupported,
		isListening,
		isFinal,
		recognition,
		result,
		error: error$1,
		toggle,
		start,
		stop
	};
}
function useSpeechSynthesis(text, options = {}) {
	const { pitch = 1, rate = 1, volume = 1, window: window$1 = defaultWindow } = options;
	const synth = window$1 && window$1.speechSynthesis;
	const isSupported = useSupported(() => synth);
	const isPlaying = ref(false);
	const status = ref("init");
	const spokenText = toRef(text || "");
	const lang = toRef(options.lang || "en-US");
	const error$1 = shallowRef(void 0);
	const toggle = (value = !isPlaying.value) => {
		isPlaying.value = value;
	};
	const bindEventsForUtterance = (utterance2) => {
		utterance2.lang = toValue(lang);
		utterance2.voice = toValue(options.voice) || null;
		utterance2.pitch = toValue(pitch);
		utterance2.rate = toValue(rate);
		utterance2.volume = volume;
		utterance2.onstart = () => {
			isPlaying.value = true;
			status.value = "play";
		};
		utterance2.onpause = () => {
			isPlaying.value = false;
			status.value = "pause";
		};
		utterance2.onresume = () => {
			isPlaying.value = true;
			status.value = "play";
		};
		utterance2.onend = () => {
			isPlaying.value = false;
			status.value = "end";
		};
		utterance2.onerror = (event) => {
			error$1.value = event;
		};
	};
	const utterance = computed(() => {
		isPlaying.value = false;
		status.value = "init";
		const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
		bindEventsForUtterance(newUtterance);
		return newUtterance;
	});
	const speak = () => {
		synth.cancel();
		utterance && synth.speak(utterance.value);
	};
	const stop = () => {
		synth.cancel();
		isPlaying.value = false;
	};
	if (isSupported.value) {
		bindEventsForUtterance(utterance.value);
		watch(lang, (lang2) => {
			if (utterance.value && !isPlaying.value) utterance.value.lang = lang2;
		});
		if (options.voice) watch(options.voice, () => {
			synth.cancel();
		});
		watch(isPlaying, () => {
			if (isPlaying.value) synth.resume();
			else synth.pause();
		});
	}
	tryOnScopeDispose(() => {
		isPlaying.value = false;
	});
	return {
		isSupported,
		isPlaying,
		status,
		utterance,
		error: error$1,
		stop,
		toggle,
		speak
	};
}
Number.POSITIVE_INFINITY;
function useTimestamp(options = {}) {
	const { controls: exposeControls = false, offset = 0, immediate = true, interval = "requestAnimationFrame", callback } = options;
	const ts = ref(timestamp() + offset);
	const update = () => ts.value = timestamp() + offset;
	const cb = callback ? () => {
		update();
		callback(ts.value);
	} : update;
	const controls = interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : useIntervalFn(cb, interval, { immediate });
	if (exposeControls) return {
		timestamp: ts,
		...controls
	};
	else return ts;
}
function useVirtualList(list, options) {
	const { containerStyle, wrapperProps, scrollTo: scrollTo$1, calculateRange, currentList, containerRef } = "itemHeight" in options ? useVerticalVirtualList(options, list) : useHorizontalVirtualList(options, list);
	return {
		list: currentList,
		scrollTo: scrollTo$1,
		containerProps: {
			ref: containerRef,
			onScroll: () => {
				calculateRange();
			},
			style: containerStyle
		},
		wrapperProps
	};
}
function useVirtualListResources(list) {
	const containerRef = ref(null);
	const size = useElementSize(containerRef);
	const currentList = ref([]);
	const source = shallowRef(list);
	return {
		state: ref({
			start: 0,
			end: 10
		}),
		source,
		currentList,
		size,
		containerRef
	};
}
function createGetViewCapacity(state, source, itemSize) {
	return (containerSize) => {
		if (typeof itemSize === "number") return Math.ceil(containerSize / itemSize);
		const { start = 0 } = state.value;
		let sum = 0;
		let capacity = 0;
		for (let i = start; i < source.value.length; i++) {
			const size = itemSize(i);
			sum += size;
			capacity = i;
			if (sum > containerSize) break;
		}
		return capacity - start;
	};
}
function createGetOffset(source, itemSize) {
	return (scrollDirection) => {
		if (typeof itemSize === "number") return Math.floor(scrollDirection / itemSize) + 1;
		let sum = 0;
		let offset = 0;
		for (let i = 0; i < source.value.length; i++) {
			const size = itemSize(i);
			sum += size;
			if (sum >= scrollDirection) {
				offset = i;
				break;
			}
		}
		return offset + 1;
	};
}
function createCalculateRange(type, overscan, getOffset, getViewCapacity, { containerRef, state, currentList, source }) {
	return () => {
		const element = containerRef.value;
		if (element) {
			const offset = getOffset(type === "vertical" ? element.scrollTop : element.scrollLeft);
			const viewCapacity = getViewCapacity(type === "vertical" ? element.clientHeight : element.clientWidth);
			const from = offset - overscan;
			const to = offset + viewCapacity + overscan;
			state.value = {
				start: from < 0 ? 0 : from,
				end: to > source.value.length ? source.value.length : to
			};
			currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
				data: ele,
				index: index + state.value.start
			}));
		}
	};
}
function createGetDistance(itemSize, source) {
	return (index) => {
		if (typeof itemSize === "number") return index * itemSize;
		return source.value.slice(0, index).reduce((sum, _, i) => sum + itemSize(i), 0);
	};
}
function useWatchForSizes(size, list, containerRef, calculateRange) {
	watch([
		size.width,
		size.height,
		list,
		containerRef
	], () => {
		calculateRange();
	});
}
function createComputedTotalSize(itemSize, source) {
	return computed(() => {
		if (typeof itemSize === "number") return source.value.length * itemSize;
		return source.value.reduce((sum, _, index) => sum + itemSize(index), 0);
	});
}
var scrollToDictionaryForElementScrollKey = {
	horizontal: "scrollLeft",
	vertical: "scrollTop"
};
function createScrollTo(type, calculateRange, getDistance, containerRef) {
	return (index) => {
		if (containerRef.value) {
			containerRef.value[scrollToDictionaryForElementScrollKey[type]] = getDistance(index);
			calculateRange();
		}
	};
}
function useHorizontalVirtualList(options, list) {
	const resources = useVirtualListResources(list);
	const { state, source, currentList, size, containerRef } = resources;
	const containerStyle = { overflowX: "auto" };
	const { itemWidth, overscan = 5 } = options;
	const getViewCapacity = createGetViewCapacity(state, source, itemWidth);
	const calculateRange = createCalculateRange("horizontal", overscan, createGetOffset(source, itemWidth), getViewCapacity, resources);
	const getDistanceLeft = createGetDistance(itemWidth, source);
	const offsetLeft = computed(() => getDistanceLeft(state.value.start));
	const totalWidth = createComputedTotalSize(itemWidth, source);
	useWatchForSizes(size, list, containerRef, calculateRange);
	return {
		scrollTo: createScrollTo("horizontal", calculateRange, getDistanceLeft, containerRef),
		calculateRange,
		wrapperProps: computed(() => {
			return { style: {
				height: "100%",
				width: `${totalWidth.value - offsetLeft.value}px`,
				marginLeft: `${offsetLeft.value}px`,
				display: "flex"
			} };
		}),
		containerStyle,
		currentList,
		containerRef
	};
}
function useVerticalVirtualList(options, list) {
	const resources = useVirtualListResources(list);
	const { state, source, currentList, size, containerRef } = resources;
	const containerStyle = { overflowY: "auto" };
	const { itemHeight, overscan = 5 } = options;
	const getViewCapacity = createGetViewCapacity(state, source, itemHeight);
	const calculateRange = createCalculateRange("vertical", overscan, createGetOffset(source, itemHeight), getViewCapacity, resources);
	const getDistanceTop = createGetDistance(itemHeight, source);
	const offsetTop = computed(() => getDistanceTop(state.value.start));
	const totalHeight = createComputedTotalSize(itemHeight, source);
	useWatchForSizes(size, list, containerRef, calculateRange);
	return {
		calculateRange,
		scrollTo: createScrollTo("vertical", calculateRange, getDistanceTop, containerRef),
		containerStyle,
		wrapperProps: computed(() => {
			return { style: {
				width: "100%",
				height: `${totalHeight.value - offsetTop.value}px`,
				marginTop: `${offsetTop.value}px`
			} };
		}),
		currentList,
		containerRef
	};
}
var require_isArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Array.isArray;
}));
var require__freeGlobal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_dist();
	module.exports = typeof global == "object" && global && global.Object === Object && global;
}));
var require__root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	module.exports = freeGlobal || freeSelf || Function("return this")();
}));
var require__Symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Symbol;
}));
var require__getRawTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol$2 = require__Symbol();
	var objectProto$1 = Object.prototype;
	var hasOwnProperty$3 = objectProto$1.hasOwnProperty;
	var nativeObjectToString$1 = objectProto$1.toString;
	var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
	function getRawTag$1(value) {
		var isOwn = hasOwnProperty$3.call(value, symToStringTag$1), tag = value[symToStringTag$1];
		try {
			value[symToStringTag$1] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString$1.call(value);
		if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
		else delete value[symToStringTag$1];
		return result;
	}
	module.exports = getRawTag$1;
}));
var require__objectToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeObjectToString = Object.prototype.toString;
	function objectToString$1(value) {
		return nativeObjectToString.call(value);
	}
	module.exports = objectToString$1;
}));
var require__baseGetTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol$1 = require__Symbol(), getRawTag = require__getRawTag(), objectToString = require__objectToString();
	var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
	function baseGetTag$1(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	module.exports = baseGetTag$1;
}));
var require_isObjectLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	module.exports = isObjectLike;
}));
var require_isObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function isObject$2(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	module.exports = isObject$2;
}));
var require_isFunction = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag(), isObject$1 = require_isObject();
	var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
	function isFunction$1(value) {
		if (!isObject$1(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	module.exports = isFunction$1;
}));
var require__coreJsData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root()["__core-js_shared__"];
}));
var require__isMasked = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var coreJsData = require__coreJsData();
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	function isMasked$1(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	module.exports = isMasked$1;
}));
var require__toSource = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var funcToString$1 = Function.prototype.toString;
	function toSource$1(func) {
		if (func != null) {
			try {
				return funcToString$1.call(func);
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
	module.exports = toSource$1;
}));
var require__baseIsNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction(), isMasked = require__isMasked(), isObject = require_isObject(), toSource = require__toSource();
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	var funcProto = Function.prototype, objectProto = Object.prototype;
	var funcToString = funcProto.toString;
	var hasOwnProperty$2 = objectProto.hasOwnProperty;
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function baseIsNative$1(value) {
		if (!isObject(value) || isMasked(value)) return false;
		return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
	}
	module.exports = baseIsNative$1;
}));
var require__getValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function getValue$1(object, key) {
		return object == null ? void 0 : object[key];
	}
	module.exports = getValue$1;
}));
var require__getNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsNative = require__baseIsNative(), getValue = require__getValue();
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	module.exports = getNative;
}));
var require__nativeCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(Object, "create");
}));
var require__hashClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate$3 = require__nativeCreate();
	function hashClear$1() {
		this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
		this.size = 0;
	}
	module.exports = hashClear$1;
}));
var require__hashDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function hashDelete$1(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = hashDelete$1;
}));
var require__hashGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate$2 = require__nativeCreate();
	var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	function hashGet$1(key) {
		var data = this.__data__;
		if (nativeCreate$2) {
			var result = data[key];
			return result === HASH_UNDEFINED$1 ? void 0 : result;
		}
		return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
	}
	module.exports = hashGet$1;
}));
var require__hashHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate$1 = require__nativeCreate();
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hashHas$1(key) {
		var data = this.__data__;
		return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
	module.exports = hashHas$1;
}));
var require__hashSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	function hashSet$1(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	module.exports = hashSet$1;
}));
var require__Hash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hashClear = require__hashClear(), hashDelete = require__hashDelete(), hashGet = require__hashGet(), hashHas = require__hashHas(), hashSet = require__hashSet();
	function Hash$1(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype["delete"] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;
	module.exports = Hash$1;
}));
var require__listCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function listCacheClear$1() {
		this.__data__ = [];
		this.size = 0;
	}
	module.exports = listCacheClear$1;
}));
var require_eq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function eq$1(value, other) {
		return value === other || value !== value && other !== other;
	}
	module.exports = eq$1;
}));
var require__assocIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var eq = require_eq();
	function assocIndexOf$4(array, key) {
		var length = array.length;
		while (length--) if (eq(array[length][0], key)) return length;
		return -1;
	}
	module.exports = assocIndexOf$4;
}));
var require__listCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf$3 = require__assocIndexOf();
	var splice = Array.prototype.splice;
	function listCacheDelete$1(key) {
		var data = this.__data__, index = assocIndexOf$3(data, key);
		if (index < 0) return false;
		if (index == data.length - 1) data.pop();
		else splice.call(data, index, 1);
		--this.size;
		return true;
	}
	module.exports = listCacheDelete$1;
}));
var require__listCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf$2 = require__assocIndexOf();
	function listCacheGet$1(key) {
		var data = this.__data__, index = assocIndexOf$2(data, key);
		return index < 0 ? void 0 : data[index][1];
	}
	module.exports = listCacheGet$1;
}));
var require__listCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf$1 = require__assocIndexOf();
	function listCacheHas$1(key) {
		return assocIndexOf$1(this.__data__, key) > -1;
	}
	module.exports = listCacheHas$1;
}));
var require__listCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	function listCacheSet$1(key, value) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index][1] = value;
		return this;
	}
	module.exports = listCacheSet$1;
}));
var require__ListCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var listCacheClear = require__listCacheClear(), listCacheDelete = require__listCacheDelete(), listCacheGet = require__listCacheGet(), listCacheHas = require__listCacheHas(), listCacheSet = require__listCacheSet();
	function ListCache$1(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	ListCache$1.prototype.clear = listCacheClear;
	ListCache$1.prototype["delete"] = listCacheDelete;
	ListCache$1.prototype.get = listCacheGet;
	ListCache$1.prototype.has = listCacheHas;
	ListCache$1.prototype.set = listCacheSet;
	module.exports = ListCache$1;
}));
var require__Map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Map");
}));
var require__mapCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Hash = require__Hash(), ListCache = require__ListCache(), Map$1 = require__Map();
	function mapCacheClear$1() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map$1 || ListCache)(),
			"string": new Hash()
		};
	}
	module.exports = mapCacheClear$1;
}));
var require__isKeyable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function isKeyable$1(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	module.exports = isKeyable$1;
}));
var require__getMapData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isKeyable = require__isKeyable();
	function getMapData$4(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	module.exports = getMapData$4;
}));
var require__mapCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData$3 = require__getMapData();
	function mapCacheDelete$1(key) {
		var result = getMapData$3(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = mapCacheDelete$1;
}));
var require__mapCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData$2 = require__getMapData();
	function mapCacheGet$1(key) {
		return getMapData$2(this, key).get(key);
	}
	module.exports = mapCacheGet$1;
}));
var require__mapCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData$1 = require__getMapData();
	function mapCacheHas$1(key) {
		return getMapData$1(this, key).has(key);
	}
	module.exports = mapCacheHas$1;
}));
var require__mapCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	function mapCacheSet$1(key, value) {
		var data = getMapData(this, key), size = data.size;
		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}
	module.exports = mapCacheSet$1;
}));
var require__MapCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var mapCacheClear = require__mapCacheClear(), mapCacheDelete = require__mapCacheDelete(), mapCacheGet = require__mapCacheGet(), mapCacheHas = require__mapCacheHas(), mapCacheSet = require__mapCacheSet();
	function MapCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	module.exports = MapCache;
}));
export { toRefs as $, useIntersectionObserver as A, useVirtualList as B, useCssVar as C, useEventListener as D, useElementSize as E, useSessionStorage as F, isClient as G, createEventHook as H, useSpeechRecognition as I, noop as J, isIOS as K, useSpeechSynthesis as L, useMediaQuery as M, useResizeObserver as N, useFavicon as O, useScroll as P, toRef as Q, useStorage as R, useClipboard as S, useElementHover as T, createInjectionState as U, computedWithControl as V, directiveHooks as W, refDebounced as X, notNullish as Y, refThrottled as Z, onKeyDown as _, I18nT as _t, require__getNative as a, watchDebounced as at, useActiveElement as b, require_isObject as c, isVue2 as ct, require__Symbol as d, addHeaders as dt, toValue as et, require__root as f, addNodeTranslation as ft, onClickOutside as g, useI18n as gt, computedAsync as h, setLanguage as ht, require_eq as i, useThrottleFn as it, useLocalStorage as j, useFileDialog as k, require_isObjectLike as l, set as lt, require_isArray as m, i18nInstance as mt, require__Map as n, tryOnScopeDispose as nt, require__toSource as o, watchOnce as ot, require__freeGlobal as p, i18n as pt, isObject$3 as q, require__ListCache as r, useDebounceFn as rt, require_isFunction as s, watchThrottled as st, require__MapCache as t, tryOnMounted as tt, require__baseGetTag as u, addCredentialTranslation as ut, onKeyStroke as v, useDocumentVisibility as w, useAsyncState as x, onKeyUp as y, useTimestamp as z };
