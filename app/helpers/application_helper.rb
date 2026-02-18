module ApplicationHelper
    def react_component(name, rvcc, props = {})
        content_tag :div,
                    '',
                    class: rvcc,
                    data: {
                        react_component: name,
                        react_props: props.to_json
                    }
    end
end
