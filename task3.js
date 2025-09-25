function showLinkInfo(){
    const links = document.getElementsByTagName("a");
    const totalLinks = links.length;
    const firstLink = links[0]?.href || "No hay enlaces";
    const lastLink = links[links.length - 1]?.href || "No hay enlaces";

    alert(`Numéro total de enlaces ${totalLinks}
    Primer enlace: ${firstLink}
    Último enlace: ${lastLink}`);
}