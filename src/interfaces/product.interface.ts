import type { JSONContent } from "@tiptap/core";
import type { Json } from "../supabase/supabase";

export interface Color {
	name: string;
	color: string;
	price: number;
}

export interface VariantProduct {
	id: string;
	stock: number;
	price: number;
	storage: string;
	color: string;
	color_name: string;
}

export interface Product {
	id: string;
	name: string;
	brand: string;
	slug: string;
	features: string[];
	description: Json;
	images: string[];
	created_at: string;
	variants: VariantProduct[];
}

export interface PreparedProducts {
	id: string;
	name: string;
	brand: string;
	slug: string;
	features: string[];
	description: Json;
	images: string[];
	created_at: string;
	price: number;
	colors: {
		name: string;
		color: string;
	}[];
	variants: VariantProduct[];
}

export interface ProductInput {
	name: string;
	brand: string;
	slug: string;
	features: string[];
	description: JSONContent;
	//images es de tipo FILE[] en vez de string porque es el tipo que se manda a la funcion de subida de imagenes
	// No es el string[] con la URL que se guardara en la BD:
	images: File[];
	variants: VariantInput[];
}

export interface VariantInput {
	id?: string;
	stock: number;
	price: number;
	color: string;
	storage: string;
	colorName: string;
}