import { EditorContent, useEditor, type Editor as EditorType, type JSONContent, } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import type { ProductFormValues } from '../../../lib/validators';
import { useEffect, type ReactNode } from 'react';
import type { FieldErrors, UseFormSetValue } from 'react-hook-form';

interface Props {
	setValue: UseFormSetValue<ProductFormValues>;
	errors: FieldErrors<ProductFormValues>;
	initialContent?: JSONContent;
}

export const MenuBar = ({ editor }: { editor: EditorType | null }) => {

	const buttonClass = (isActive: boolean) =>
		`w-8 h-7 grid place-items-center  border text-sm rounded transition-all ${isActive
			? 'border-blue-500 bg-blue-100 text-blue-700'
			: 'border-gray-300 bg-white text-gray-600 hover:bg-gray-100'
		}`;

	if (!editor) { return null; }

	return (
		<div className='flex flex-wrap gap-3'>

			{/* Modifica el texto seleccionado o nuevo, por la configuracion H1 */}
			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 1 }).run()
				}
				className={buttonClass(
					editor.isActive('heading', { level: 1 })
				)}
				type='button'
			>
				H1
			</button>

			{/* Modifica el texto seleccionado o nuevo, por la configuracion H2 */}
			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 2 }).run()
				}
				className={buttonClass(
					editor.isActive('heading', { level: 2 })
				)}
				type='button'
			>
				H2
			</button>

			{/* Modifica el texto seleccionado o nuevo, por la configuracion H3 */}
			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 3 }).run()
				}
				className={buttonClass(
					editor.isActive('heading', { level: 3 })
				)}
				type='button'
			>
				H3
			</button>

			{/* Modifica el texto seleccionado o nuevo, por la configuracion Negrita */}
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				className={buttonClass(editor.isActive('bold'))}
				type='button'
			>
				N
			</button>

			{/* Modifica el texto seleccionado o nuevo, por la configuracion Italica */}
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={buttonClass(editor.isActive('italic'))}
				type='button'
			>
				K
			</button>

			{/* Modifica el texto seleccionado o nuevo, por la configuracion Tachado */}
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				className={buttonClass(editor.isActive('strike'))}
				type='button'
			>
				S
			</button>
		</div>
	);
};

export const Editor = ({ setValue, errors, initialContent }: Props) => {

	const editor = useEditor({
		extensions: [StarterKit],
		content: initialContent || '',
		onUpdate: ({ editor }) => {

			// Aquí actualizamos el valor del campo 'description.content en el formulario
			const content = editor.getJSON();
			setValue('description', content, { shouldValidate: true });
		},
		editorProps: {
			attributes: {
				class:
					'focus:outline-none min-h-[150px] prose  max-w-none',
			},
		},
	});

	useEffect(() => {
		if (initialContent && editor) {
			editor.commands.setContent(initialContent);
		}
	}, [initialContent, editor]);

	return (
		<div className='space-y-3'>
			<MenuBar editor={editor} />

			<EditorContent editor={editor} />

			{errors.description && (
				<p className='text-red-500 text-xs mt-1'>
					{(errors.description.message as ReactNode) ||
						'Debe escribir una descripción'}
				</p>
			)}
		</div>
	);
};