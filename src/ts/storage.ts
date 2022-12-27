/*
 * Copyright (C) 2022 Daniel Fernandes
 * 
 * This file is part of MIDI-FX.
 * 
 * MIDI-FX is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * MIDI-FX is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with MIDI-FX. If not, see <https://www.gnu.org/licenses/>.
 */

type storageOnChangeCallback = (newVal: string, oldVal: string) => void;
type storageUpdateCallback = (oldVal: string) => string;

class storedObject {
    #area: Storage;
    key: string;
    namespace: string;
    constructor(key: string, area: Storage, namespace: string) {
        this.key = key;
        this.namespace = namespace;
        this.#area = area;
    }

    setValue(value: string) {
        this.#area.setItem(this.key, value);
    }

    getValue() {
        return this.#area.getItem(this.key);
    }

    update(func: storageUpdateCallback) {
        const oldVal = this.getValue();
        const newVal = func(oldVal);
        this.setValue(newVal);
    }

    onChange(callback: storageOnChangeCallback) {
        onChangeCallbacks[this.namespace][this.key] =
            onChangeCallbacks[this.namespace][this.key] || [];
        onChangeCallbacks[this.namespace][this.key].push(callback);
    }
}

class LocalStorage extends storedObject {
    constructor(key: string) {
        super(key, window.localStorage, "local");
    }
}

class SessionStorage extends storedObject {
    constructor(key: string) {
        super(key, window.sessionStorage, "session");
    }
}

export const storage = {
    local: LocalStorage,
    session: SessionStorage,
};

const onChangeCallbacks = {
    local: {},
    session: {},
};

window.addEventListener("storage", (e: StorageEvent) => {
    const namespace = e.storageArea === window.localStorage ? "local" : "session";
    if (onChangeCallbacks[namespace][e.key]) {
        onChangeCallbacks[namespace][e.key].forEach((f: storageOnChangeCallback) =>
            f(e.newValue, e.oldValue)
        );
    }
});
