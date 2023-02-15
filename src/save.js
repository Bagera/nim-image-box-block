import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: "nim-image-box",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
