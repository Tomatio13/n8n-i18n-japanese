import { na as fileTypeFromMimeType } from "./src-idT_fqaK.js";
//#region src/app/utils/fileUtils.ts
/** Matches `path.parse().ext`: a leading dot (`.env`) or no dot (`README`) means no extension. */
function getFileExtension(fileName) {
	const dotIndex = fileName.lastIndexOf(".");
	return dotIndex > 0 ? fileName.slice(dotIndex + 1) : "";
}
/** Display/download name for binary data; `fileName` usually already carries the extension. */
function getBinaryDataFileName({ fileName, fileExtension }) {
	const name = fileName ?? "file";
	if (name.includes(".") || !fileExtension) return name;
	return `${name}.${fileExtension}`;
}
function resolveFileMimeType(fileName, mimeType) {
	if (mimeType) return mimeType;
	if (fileName.toLowerCase().endsWith(".md")) return "text/markdown";
	return "";
}
async function convertFileToBinaryData(file) {
	const reader = new FileReader();
	return await new Promise((resolve, reject) => {
		reader.onload = () => {
			const mimeType = resolveFileMimeType(file.name, file.type);
			resolve({
				data: reader.result.split("base64,")?.[1] ?? "",
				mimeType,
				fileName: file.name,
				fileSize: `${file.size} bytes`,
				fileExtension: getFileExtension(file.name) || void 0,
				fileType: fileTypeFromMimeType(mimeType)
			});
		};
		reader.onerror = () => {
			reject(/* @__PURE__ */ new Error("Failed to convert file to binary data"));
		};
		reader.readAsDataURL(file);
	});
}
//#endregion
export { getBinaryDataFileName as n, resolveFileMimeType as r, convertFileToBinaryData as t };
