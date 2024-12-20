import type { PageProps } from "$fresh/server.ts";
import type { JSX } from "preact/jsx-runtime";
import WebFooter from "../components/footer/WebFooter.tsx";
import Navbar from "../components/nav/Navbar.tsx";

export default function Layout({ Component }: PageProps): JSX.Element {
	return (
		<div class="layout-wrapper relative min-h-screen pb-[footer-height]">
			<div class="page-wrapper">
				<Navbar />
				<main class="main-content">
					<Component />
				</main>
			</div>
			<WebFooter class="absolute bottom-0 w-full" />
		</div>
	);
}
