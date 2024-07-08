import GalleryList from "../main-page/GalleryList"
import { render, screen } from "@testing-library/react"

describe("Lista de exibição", () => {
    it("deve ter todos os produtos", () => {
        render(<GalleryList/>)

        const galleryItems = screen.getAllByRole("listitem")
        expect(galleryItems.length).toBe(10)
    })
})
