package com.spring.scy;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    @RequestMapping(method = RequestMethod.GET, path = "/init/hello")
    public Map<String, Object> Sample() {

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("date", new Date());

        return map;
    }

}
