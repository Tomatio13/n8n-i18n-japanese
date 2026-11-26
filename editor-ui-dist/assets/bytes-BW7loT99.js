//#region ../../@n8n/utils/src/number/bytes.ts
/**
* Convert bytes to megabytes (rounded to nearest integer)
*/
function toMb(sizeInBytes) {
	return Math.round(sizeInBytes / 1048576);
}
/**
* Convert bytes to gigabytes (rounded to at most two decimals, so 1.5 GB stays 1.5)
*/
function toGb(sizeInBytes) {
	return Math.round(sizeInBytes / 1073741824 * 100) / 100;
}
/**
* Format a size for a user-facing limit: whole megabytes below one gigabyte
* ("500 MB"), gigabytes with at most two decimals from there on ("1.5 GB")
*/
function formatMbOrGb(sizeInBytes) {
	if (sizeInBytes < 1073741824) return `${toMb(sizeInBytes)} MB`;
	return `${toGb(sizeInBytes)} GB`;
}
/**
* Format bytes to human-readable size with appropriate unit (B, KB, or MB)
*/
function formatBytes(sizeInBytes) {
	if (sizeInBytes < 1024) return `${sizeInBytes}B`;
	else if (sizeInBytes < 1048576) return `${Math.round(sizeInBytes / 1024)}KB`;
	else return `${Math.round(sizeInBytes / 1048576)}MB`;
}
//#endregion
export { formatMbOrGb as n, toMb as r, formatBytes as t };
