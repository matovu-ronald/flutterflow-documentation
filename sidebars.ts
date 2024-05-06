import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  troubleshootingSidebar: [{type: 'autogenerated', dirName: 'troubleshooting'}], // Adjust `dirName` as needed
  changelogSidebar: [{type: 'autogenerated', dirName: 'changelog'}], // Adjust `dirName` as needed
  docsSidebar : [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['index', {type: 'category', label: "Before You Begin", items: [
        'intro/before-you-begin/setting-up-flutterflow', 'intro/before-you-begin/app-architecture','intro/quickstart'
    ]},{type: 'category', label: "FlutterFlow UI", items: [
      'intro/ff-ui/builder', 'intro/ff-ui/navigation-menu','intro/ff-ui/toolbar','intro/ff-ui/canvas','intro/ff-ui/properties-panel','intro/ff-ui/resource-hierarchy'
  ]}],
    }
  ]
};

export default sidebars;
