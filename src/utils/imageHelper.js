const allProjectImages = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG,SVG}', {
    eager: true,
    import: 'default'
});


export const getProjectScreenshots = (projectId) => {
    return Object.keys(allProjectImages)
        .filter((path) => path.includes(`/projects/${projectId}/`))
        .map((path) => allProjectImages[path]);
};

export const getDisplayImage = (projectId) => {
    const displayImagePath = Object.keys(allProjectImages).find((path) => {
        return path.includes(`/projects/${projectId}/`) && path.toLowerCase().includes('displayimg');
    });
    return displayImagePath ? allProjectImages[displayImagePath] : null;
};