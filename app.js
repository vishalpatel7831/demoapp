const tabs = document.querySelectorAll("[data-tab-target]");
const tabsContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab => {

    tab.addEventListener("click", function () {

        const target = document.querySelector(tab.dataset.tabTarget);

        tabsContents.forEach(tabsContent => {
            tabsContent.classList.remove("active");
        });


// ******************************************** effect**************************************************************************


        tabs.forEach(function(tab) {
            tab.classList.remove("active");
        });


// *****************************************************hover add classlist******************************************************************

        tab.classList.add("active");
        target.classList.add("active");
    });
});
