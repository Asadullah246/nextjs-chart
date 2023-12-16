export const setCookie = ({
  name,
  value,
  expiryDays,
  path = "/"
}: {
  name: string;
  value: string;
  expiryDays: number;
  path?: string;
}) => {
  const date = new Date();
  date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();

  document.cookie = `${name}=${value || ""}${expires}; path=${path}; samesite=strict; ${
    document.location.protocol === "https:" ?? "secure;"
  }`;
};

export const getCookie = (cookieName: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookieName}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }

  return null;
};
