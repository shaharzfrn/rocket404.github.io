
export function setCookie(name: String, val: String) {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    return (document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; Secure; SameSite=None`);
}

export function getCookie(name: String): String | null {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length === 2 && parts[1]) {
        return String(parts[1].split(";").shift());
    }

    return null;
}

export function deleteCookie(name: String) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}