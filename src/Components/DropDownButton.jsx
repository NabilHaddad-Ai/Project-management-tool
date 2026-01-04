import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function DropDownButton({ onModify, onDelete }) {
    return (
        <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex h-7 w-7 items-center justify-center rounded hover:bg-stone-100">
                ⋯
            </MenuButton>

            <MenuItems
                className="absolute left-full ml-2 top-0 w-32 rounded-md border border-stone-200 bg-white shadow-lg z-[9999]"
                style={{ color: "#111", backgroundColor: "#fff" }}
            >
                <MenuItem
                    as="button"
                    onClick={onModify}
                    className="block w-full px-3 py-2 text-left text-sm hover:bg-stone-100"
                    style={{ color: "#111" }}
                >
                    Modify
                </MenuItem>

                <MenuItem
                    as="button"
                    onClick={onDelete}
                    className="block w-full px-3 py-2 text-left text-sm hover:bg-stone-100"
                    style={{ color: "#111" }}
                >
                    Delete
                </MenuItem>
            </MenuItems>
        </Menu>
    );
}
