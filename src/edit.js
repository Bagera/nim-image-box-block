import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	const classPrefix = "nim-image-box_";

	const TEMPLATE = [
		["core/image", { className: classPrefix + "image" }],
		[
			"core/group",
			{ className: classPrefix + "text-container" },
			[
				["core/heading", { placeholder: "Section Title" }],
				["core/paragraph", { placeholder: "Content" }],
			],
		],
	];

	const blockProps = useBlockProps({
		className: classPrefix + "editor",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks template={TEMPLATE} templateLock="all" />
		</div>
	);
}
